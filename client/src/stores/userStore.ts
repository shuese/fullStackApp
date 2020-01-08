import {
  configure,
  observable,
  action,
  runInAction,
  } from 'mobx';
import axios from 'axios';
import get from 'lodash/get';

configure({ enforceActions: 'observed' });

type codeType = number | null;

export class UserStore {
  @observable status: string = 'pending';
  @observable errorMessage: {} = {};
  @observable code: codeType = null;

  @action
  signUpUser = async (signValue: {}) => {
    this.status = 'progress';
    this.errorMessage = {};
    this.code = null;
    try {
      await axios.post('/signup', signValue);
      runInAction(() => {
        this.status = 'succes';
    });
    } catch (error) {
      runInAction(() => {
        this.status = 'pressF';
        this.errorMessage = get(error, 'response.data.message.errors', null);
        this.code = get(error, 'response.status', null);
    });
    }
    if (this.status ===  'pressF' || 'succes') {
      setTimeout(() => {
        runInAction(() => {
          this.status = 'pending';
      });
      }, 2500);
    }
  }
}
