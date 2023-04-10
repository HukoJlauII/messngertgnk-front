import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';
import axios from "axios";
import {useContext} from "react";
import {Context} from "../index";

export const registration = async (name, surname, username, email, password, passwordConfirm) => {
    console.log(name, surname, username, email, password, passwordConfirm)
    return await $host.post('api/auth/register', {name, surname, username, email, password, passwordConfirm})

}

export const login = async (username, password) => {
    const {data} = await $host.post('api/auth/login', {username, password})
    localStorage.setItem('token', data.token)
    return data
}

const getToken=()=>{
    return localStorage.getItem('token')
}

export const info = async () => {
    return axios({
        method:'GET',
        url:`http://localhost:8080/api/auth/info`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
    // const response = (await $authHost.get('api/auth/info')).headers({'Authorization': 'Bearer ' + getToken()})
    // return response
}

