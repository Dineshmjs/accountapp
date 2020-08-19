import Axios from 'axios';

const offline = "http://localhost:2000";
//const online = "https://accountnote.herokuapp.com"

export const http = Axios.create({
    baseURL:offline
})


