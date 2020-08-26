import {creditsubmit, creditid, debitsubmit, debitid, debitdelete, creditdelete, edit, spendsubmit, spendid, spenddelete, load} from './Type';

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

export const spendSubmit = (data) =>{
    return{
        type:spendsubmit,
        data:data
    }
    
} 

export const spendId = (data) =>{
    return{
        type:spendid,
        data:data
    }
    
} 

export const spendDelete = () =>{
    return{
        type:spenddelete        
    }    
} 


export const reLoad = () =>{
    return{
        type:load        
    }    
} 

