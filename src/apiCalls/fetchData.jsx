import { urls } from "@/config/urls";
import axios from "axios";

export async function getImage(){
    try {
        const response = await axios.get(`${urls.getImage}`).then((response) => {
            return response;
    })
    if (response) {
        return response
    }
    } catch (error) {
        console.log(error)
    }
}

export async function getText(place){
    try {
        const response = await axios.get(`${urls.getText}`).then((response) => {
            return response;
    })
    if (response) {
        return response
    }
    } catch (error) {
        console.log(error)
    }
}