import axios from "axios";
import {getToken} from "./userAPI";

export const allMessagesInChat = async (sender, receiver) => {
    console.log(receiver)
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/messages/search/messagesInDialog`,
        params: {
            sender: sender.id,
            receiver: receiver.id
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}