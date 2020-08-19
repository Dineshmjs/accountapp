import {credit} from '../redux/Type'

export const CreditAction = (data) =>{
    return{
        type:credit,
        data:data
    }
}

