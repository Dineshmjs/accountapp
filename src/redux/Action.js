import {creditsubmit, creditid, debitsubmit, debitid, debitdelete, creditdelete, edit} from './Type';

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

export const debitDelete = () =>{
    return{
        type:debitdelete        
    }
    
} 

export const creditDelete = () =>{
    return{
        type:creditdelete        
    }
    
} 

export const Edit = (data) =>{
    return{
        type:edit,
        data:data   

    }
    
} 

