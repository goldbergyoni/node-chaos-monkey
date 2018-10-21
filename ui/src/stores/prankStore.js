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
      console.log(res.data);
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
        console.log(data);
        this.pranksLog.push(data);
      } else {
        console.log(`A new prank just ran ${JSON.stringify(data)}`);
      }
    });
  }

  @action.bound
  disconnect() {
    socket.disconnect();
    console.log('Socket Disconnected');
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
}

const store = new PrankStore();
export default store;
