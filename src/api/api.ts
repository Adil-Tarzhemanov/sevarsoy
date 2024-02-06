import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://8.222.205.72:8080'
})