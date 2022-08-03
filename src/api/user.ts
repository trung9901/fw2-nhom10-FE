import {User} from "../models/User"
import axiosClient from "./config"
import instance from './instance';
export const signup = (user: User) => {
    return axiosClient.post("/signup", user)

}
export const signin = (user: User) => {
    return instance.post("/signin", user) 
}

export const updateItem=(id: any, user: User) =>{
    return instance.put(`/users/${id}`,user)
}

export const removeItem=(id: any)=>{
    return instance.delete(`/users/${id}`)
}