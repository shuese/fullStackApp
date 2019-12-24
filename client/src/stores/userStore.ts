import {
  configure,
  observable,
  action,
  runInAction,
  } from 'mobx';
import axios from 'axios';

configure({ enforceActions: 'observed' });

type error = boolean | null;

export class UserStore {
  @observable status: string = 'pending';
  @observable statusValidate: error =  null;
  @observable erros: {} = {};

  setActions(observable: string, delay?: boolean) {
    delay
    ? setTimeout(() => {
        runInAction(() => {
          observable = status;
        })
    }, 2500)
    : runInAction(() => {
        observable = status;
      });
  }

  @action
  signUpUser = async (signValue: object) => {
    this.setActions('progress');
    try {
      await axios.post('/signup', signValue);
      this.setActions('succes');
      this.setActions('pending', true);
    } catch (error) {
      this.setActions('pressF');
      this.setActions('pending', true);
      runInAction(() => {
        this.erros = error.response;;
      }); 
      console.log(this.erros, 'error');
    }
  }
}
