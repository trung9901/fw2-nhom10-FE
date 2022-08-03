import {User} from "../models/User"
import axiosClient from "./config"
import instance from "./instance"

export const signup = (user: User) => {
    return axiosClient.post("/signup", user)

}
export const signin = (user: any) => {
    return instance.post("/signin", user) 
}