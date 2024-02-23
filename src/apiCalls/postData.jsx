import { urls } from "@/config/urls";
import axios from "axios";

export async function sendEmail (email) {
    const body = {
        email: email
    }
    try {
        const response = await axios.post(urls.subscribeEmail,body).then((res)=> {
            return res;
        })
        if (response) {
            return response
        }
    } catch (error) {
        console.log(error)
        return error.response;
    }
}