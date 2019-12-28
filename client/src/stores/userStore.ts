<<<<<<< Updated upstream
 
=======
>>>>>>> Stashed changes
import { configure, observable, action, runInAction } from 'mobx';
import axios from 'axios';

configure({ enforceActions: 'observed' });

export class UserStore {
  @observable status: string = 'pending';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

  @action
  signUpUser = async (signValue: object) => {
=======

  @action
  signupUser = async (signValue: object) => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      this.setActions('pressF');
      this.setActions('pending', true);
      runInAction(() => {
        this.erros = error.response;;
      }); 
      console.log(this.erros, 'error');
=======
=======
>>>>>>> Stashed changes
      runInAction('press f', () => {
        this.status = 'press f';
      });
      setTimeout(() => {
        runInAction('press f post pending', () => {
          this.status = 'pending';
        });
      }, 2500);
      console.log(error, 'error');
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    }
  }
}