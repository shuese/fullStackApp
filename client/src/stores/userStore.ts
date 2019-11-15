import { configure, observable, action } from 'mobx';
import axios from 'axios';

configure({ enforceActions: 'observed' });

export class UserStore {
  @action
  public signupUser = async (signValue: object) => {
    try {
      const response = await axios.post('/signup', signValue);
      console.log(response, 'response');
    } catch (error) {
      console.log(error, 'error');
    }
  }
}
