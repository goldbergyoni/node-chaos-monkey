/** @format */

import {action, observable, computed} from 'mobx';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:8081');

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

  @action.bound
  async getSinglePranksList() {
    try {
      const res = await axios.get('http://localhost:8081/chaos/pranks-pool');
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
    alert('METRICS will be RESET in 4 Seconds');
    setTimeout(() => {
      this.apiCalls = 0;
    }, 4000);
  }

  @action.bound
  async addPrank(prank) {
    try {
      await axios.post('http://localhost:8081/chaos/pranks-activity', prank);
      console.log('Prank Added Successfully');
    } catch (e) {
      console.log('Error Adding Prank', e);
    }
  }

  @action.bound
  callApi() {
    axios
      .get(this.URL)
      .then(() => {
        this.prankRunning = true;
        this.apiCalls++;
        console.log('callingAPI', this.apiCalls);
      })
      .catch(e => {
        console.log(e);
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
