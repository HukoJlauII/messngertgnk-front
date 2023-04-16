import {$authHost, $host} from "./index";
import axios from "axios";

export const registration = async (name, surname, username, email, password, passwordConfirm) => {
    return await $host.post('api/auth/register', {name, surname, username, email, password, passwordConfirm})

}

export const login = async (username, password) => {
    const {data} = await $host.post('api/auth/login', {username, password})
    localStorage.setItem('token', data.token)
    console.log(getToken())
    return data
}

export const logout = async () => {
    console.log(localStorage.getItem('token'))
    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/auth/logout`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const getToken = () => {
    return localStorage.getItem('token')
}

export const info = async () => {
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/auth/info`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}
export const allUsers = async () => {
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/users`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const deleteUser = async (id) => {
    return axios({
        method: 'DELETE',
        url: `http://localhost:8080/api/users/`+id,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const getAvatar = async (url) => {
    return axios({
        method: 'GET',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const editPassword = async (oldPassword, newPassword, newPasswordConfirm) => {

    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/profile/changePassword`,
        data: {
            password: oldPassword,
            newPassword: newPassword,
            newPasswordConfirm: newPasswordConfirm
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const editProfile = async (formData) => {

    return fetch("http://localhost:8080/api/profile/changeInfo", {
        method: "PUT",
        body: formData,
        headers:{'Authorization': 'Bearer ' + getToken()}
    })
}


