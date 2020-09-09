<<<<<<< HEAD
import {creditsubmit,creditid, debitsubmit, debitid, debitdelete, creditdelete, edit, spendid, spendsubmit, spenddelete, load} from './Type';
=======
import {creditsubmit,creditid, debitsubmit, debitid, debitdelete, creditdelete, edit, spendid, spendsubmit, spenddelete, menu, defaultsubmit, defaultid, defaultdelete} from './Type';
>>>>>>> 1bcd86d8da2f49e4086e4f72dde9a7f04a29ac56

const initialState = {
    creditSubmit:false,
    creditId:"",
    creditDelete:0,

    defaultSubmit:false,
    defaultId:"",
    defaultDelete:0,

    debitSubmit:false,
    debitId:"",
    debitDelete:0,
   
    edit:"",
    spendSubmit:false,
    spendId:"",
    spendDelete:0,
<<<<<<< HEAD
    load:0
=======
    menu:"wi"
>>>>>>> 1bcd86d8da2f49e4086e4f72dde9a7f04a29ac56


}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case creditsubmit : return{
            ...state,
            creditSubmit:action.data
        }
        case creditid : return{
            ...state,
            creditId:action.data
        }
        case creditdelete : return{
            ...state,
            creditDelete:state.creditDelete + 1
        }

        case defaultsubmit : return{
            ...state,
            defaultSubmit:action.data
        }
        case defaultid : return{
            ...state,
            defaultId:action.data
        }
        case defaultdelete : return{
            ...state,
            defaultDelete:state.defaultsubmit + 1
        }

        case debitsubmit : return{
            ...state,
            debitSubmit:action.data
        }
        case debitid : return{
            ...state,
            debitId:action.data
        }
        case debitdelete : return{
            ...state,
            debitDelete:state.debitDelete + 1
        }        
        case edit : return{
            ...state,
            edit:action.data
        }
        case spendsubmit : return{
            ...state,
            spendSubmit:action.data
        }
        case spendid : return{
            ...state,
            spendId:action.data
        }
        case spenddelete : return{
            ...state,
            spendDelete:state.spendDelete + 1
        }
<<<<<<< HEAD
        case load : return{
            ...state,
            load:state.load + 1
=======
        case menu : return{
            ...state,
            menu:action.data
>>>>>>> 1bcd86d8da2f49e4086e4f72dde9a7f04a29ac56
        }
        default :return state
    }
} 

export default reducer;

