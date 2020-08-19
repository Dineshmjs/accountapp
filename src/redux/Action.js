import {credit} from '../redux/Type'
import { http } from '../axios'

export const CreditAction = (data) =>{
    return{
        type:credit,
        data:data
    }
}

export const fetch = (credit) =>{
    return(dispatch)=>{
        http.get("debit", { params: { credit: credit } })
            .then(res => {
                console.log("resdata",res.data)  
                // setData(res.data.debit)  
                dispatch(CreditAction(res.data.debit))
            })
            .catch(err=>{
                console.log(err)
            })
    }
}
