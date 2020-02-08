import { configure, observable, action, runInAction } from 'mobx';
import axios from 'axios';

configure({ enforceActions: 'observed' });

export class UserStore {
  @observable status: string = 'pending';
  @observable erros: {} = {};

  @action
  signUpUser = async (signValue: object) => {
    await runInAction('progress', () => {
      this.status = 'progress';
    });
    try {
      const response = await axios.post('/signup', signValue);
      await runInAction('succes', () => {
        this.status = 'succes';
      });
      await setTimeout(() => {
        runInAction('succes post pending', () => {
          this.status = 'pending';
        });
      }, 2500);
      console.log(response, 'response');
    } catch (error) {
      runInAction(() => {
        this.erros = error.response;
      });
      console.log(this.erros, 'error');

      runInAction('press f', () => {
        this.status = 'press f';
      });
      setTimeout(() => {
        runInAction('press f post pending', () => {
          this.status = 'pending';
        });
      }, 2500);
      console.log(error, 'error');
    }
  }
}
