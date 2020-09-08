import {creditsubmit,creditid, debitsubmit, debitid, debitdelete, creditdelete, edit, spendid, spendsubmit, spenddelete, menu} from './Type';

const initialState = {
    creditSubmit:false,
    creditId:"",
    debitSubmit:false,
    debitId:"",
    debitDelete:0,
    creditDelete:0,
    edit:"",
    spendSubmit:false,
    spendId:"",
    spendDelete:0,
    menu:"wi"


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
        case creditdelete : return{
            ...state,
            creditDelete:state.creditDelete + 1
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
        case menu : return{
            ...state,
            menu:action.data
        }
        default :return state
    }
} 

export default reducer;

