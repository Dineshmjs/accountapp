import {creditsubmit, creditid, debitsubmit, debitid} from './Type';

export const creditSubmit = (data) =>{
    return{
        type:creditsubmit,
        data:data
    }
    
} 

export const creditId = (data) =>{
    return{
        type:creditid,
        data:data
    }
    
} 

export const debitSubmit = (data) =>{
    return{
        type:debitsubmit,
        data:data
    }
    
} 

export const debitId = (data) =>{
    return{
        type:debitid,
        data:data
    }
    
} 

