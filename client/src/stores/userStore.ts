import { configure, observable, action, runInAction, toJS } from "mobx";
import axios from "axios";

configure({ enforceActions: "observed" });

export class UserStore {
  @observable status: string = "pending";
  @observable response: {} = {};

  @action
  signUpUser = async (signValue: object) => {
    runInAction("progress", () => {
      this.status = "progress";
    });
    try {
      const response = await axios.post("/api/auth/register", signValue);
      runInAction("succes", () => {
        this.status = "succes";
        this.response = response.data;
      });
      setTimeout(() => {
        runInAction("succes post pending", () => {
          this.status = "pending";
        });
      }, 2500);
    } catch (error) {
      runInAction(() => {
        this.response = error.response.data;
      });
      console.log(toJS(this.response), "ошибка стора");

      runInAction("press f", () => {
        this.status = "pressF";
      });
      if (this.status === "succes") {
        setTimeout(() => {
          runInAction("press f post pending", () => {
            this.status = "pending";
          });
        }, 2500);
      }
    }
  };

  @action
  signInUser = async (signValue: object) => {
    runInAction("progress", () => {
      this.status = "progress";
    });
    try {
      const response = await axios.post("/api/auth/login", signValue);
      runInAction("succes", () => {
        this.status = "succes";
        this.response = response.data;
      });
      setTimeout(() => {
        runInAction("succes post pending", () => {
          this.status = "pending";
        });
      }, 2500);
    } catch (error) {
      runInAction(() => {
        this.response = error.response.data;
      });
      console.log(toJS(this.response), "ошибка стора");

      runInAction("press f", () => {
        this.status = "pressF";
      });
      if (this.status === "succes") {
        setTimeout(() => {
          runInAction("press f post pending", () => {
            this.status = "pending";
          });
        }, 2500);
      }
    }
  };
}
