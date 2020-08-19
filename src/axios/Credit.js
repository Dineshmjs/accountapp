import { http } from './index';

export const postCredit = (data) => {
    http.post("credit", data)
        .then((res) => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getCredit = () => {
    http.get("credit")
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}    