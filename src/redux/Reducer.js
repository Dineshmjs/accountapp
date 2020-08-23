import {creditsubmit,creditid, debitsubmit, debitid, debitdelete, creditdelete} from './Type';

const initialState = {
    creditSubmit:false,
    creditId:"",
    debitSubmit:false,
    debitId:"",
    debitDelete:0,
    creditDelete:0
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
        default :return state
    }
} 

export default reducer;

