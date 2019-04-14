/** @format */

import {action, observable, computed} from 'mobx';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:9090');

class PrankStore {
  @observable
  singlePranks = [];
  @observable
  pranksLog = [];
  @observable
  prankRunning = false;
  @observable
  URL = '';
  @observable
  apiCalls = 0;
  @observable
  apiErrors = 0;
  @observable
  apiIsAlive = true;
  @observable
  startTime = 0;
  @observable
  endTime = 0;

  @computed
  get crazyScore() {
    let score = 0;
    score =
      score +
      Math.floor(
        this.pranksLog.length * Math.floor(Math.random() * Math.floor(10))
      );
    return score;
  }

  @computed
  get latency() {
    console.log("fsdfd");
    let result = 0;
    const timeFromStart = (this.endTime - this.startTime)/1000;
    console.log(`seconds from start`, timeFromStart, this.apiCalls); 
    result = Math.round((timeFromStart)/this.apiCalls);
    return 30;
  }

  @action.bound
  async getSinglePranksList() {
    try {
      const res = await axios.get('http://localhost:8080/chaos/pranks/definition');
      this.singlePranks = res.data;
    } catch (e) {
      console.log('Error getting pranks list', e);
    }
  }

  @action.bound
  getPranksLog() {
    socket.connect();
    console.log('Socket Connected');
    socket.on('new-prank-activity', data => {
      if (data) {
        console.log(`Just got a new prank ${data}`)
        this.pranksLog.push(data);
      } else {
        console.log(`a NULL prank just ran ${JSON.stringify(data)}`);
      }
    });
  }

  @action.bound
  disconnect() {
    socket.disconnect();

    this.prankRunning = false;
    console.log('Socket Disconnected');
    // alert('METRICS will be RESET in 4 Seconds');
    setTimeout(() => {
      this.apiCalls = 0;
      this.apiErrors = 0;
      this.startTime = 0;
      this.endTime = 0;
      this.apiIsAlive = true;
    }, 4000);
  }

  @action.bound
  async addPrank(prank) {
    try {
      await axios.post('http://localhost:8080/chaos/pranks/execute', prank);
      console.log('Prank Added Successfully');
    } catch (e) {
      console.log('Error Adding Prank', e);
    }
  }

  @action.bound
  callApi() {
    this.startTime = this.startTime + new Date().getTime();
    console.log('START TIME:', this.startTime);
    axios
      .get(this.URL)
      .then(() => {
        this.endTime = this.endTime + new Date().getTime();
        this.prankRunning = true;
        this.apiCalls++;
        console.log('callingAPI', this.apiCalls);
      })
      .catch(e => {
        console.log(e);
        this.apiErrors++;
        this.prankRunning = true;
        if (
          e.code === 'ECONNREFUSED' ||
          e.code === 'ENOTFOUND' ||
          e.message === 'Network Error'
        ) {
          this.apiIsAlive = false;
        }
      });
  }

  @action.bound
  setURL(newURL) {
    this.URL = newURL;
    console.log('NEW URL', newURL);
  }
}

const store = new PrankStore();
export default store;
