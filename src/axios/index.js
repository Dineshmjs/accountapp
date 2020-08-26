import Axios from 'axios';

const url = "http://localhost:2000";
// const url = "https://accountnote.herokuapp.com"

export const http = Axios.create({
    baseURL:url
})


