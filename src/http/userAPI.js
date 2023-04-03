import {$host} from "./index";

export const registration = async (name, surname, username, email, password, passwordConfirm) => {
    console.log(name,surname,username,email,password,passwordConfirm)
    const response = await $host.post('api/auth/register', {name, surname, username, email, password, passwordConfirm})
    return response
}

export const login = async (username, password) => {
    const response = await $host.post('api/auth/login', {username, password})
    return response
}

export const check = async () => {
    const response = await $host.get('api/auth/login', )
    return response
}

