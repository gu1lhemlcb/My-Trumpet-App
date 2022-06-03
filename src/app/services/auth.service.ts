import {Subject} from "rxjs";
export class AuthService {
    isAuth: boolean = false;

    logUser() {
        return new Promise((resolve, reject) => {
            resolve(this.isAuth = true);
        });
    }

    logoutUser() {
        return new Promise((resolve, reject) => {
            resolve(this.isAuth = false);
        });
    }
}