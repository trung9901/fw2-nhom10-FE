import {User} from "../models/User"
import axiosClient from "./config"

export const signup = (user: User) => {
    return axiosClient.post("/signup", user)

}