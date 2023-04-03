import {makeAutoObservable} from "mobx";

export default class UserStore {

    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    set isAuth(value) {
        this._isAuth = value;
    }

    set user(value) {
        this._user = value;
    }


    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}