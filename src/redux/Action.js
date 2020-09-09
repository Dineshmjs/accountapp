<<<<<<< HEAD
import {creditsubmit, creditid, debitsubmit, debitid, debitdelete, creditdelete, edit, spendsubmit, spendid, spenddelete, load} from './Type';
=======
import {creditsubmit, creditid, debitsubmit, debitid, debitdelete, creditdelete, edit, spendsubmit, spendid, spenddelete, menu, defaultsubmit, defaultid, defaultdelete} from './Type';
>>>>>>> 1bcd86d8da2f49e4086e4f72dde9a7f04a29ac56

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

export const creditDelete = () =>{
    return{
        type:creditdelete        
    }
    
} 

export const defaultSubmit = (data) =>{
    return{
        type:defaultsubmit,
        data:data
    }
    
} 

export const defaultId = (data) =>{
    return{
        type:defaultid,
        data:data
    }
    
} 

export const defaultDelete = () =>{
    return{
        type:defaultdelete        
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

export const ddebitSubmit = (data) =>{
    return{
        type:debitsubmit,
        data:data
    }
    
} 

export const ddebitId = (data) =>{
    return{
        type:debitid,
        data:data
    }
    
} 



export const ddebitDelete = () =>{
    return{
        type:debitdelete        
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

export const menuClick = (data) =>{
    return{
        type:menu,
        data:data   

    }
    
} 

