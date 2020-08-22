import {creditsubmit,creditid, debitsubmit, debitid} from './Type';

const initialState = {
    creditSubmit:false,
    creditId:"",
    debitSubmit:false,
    debitId:""
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
        default :return state
    }
} 

export default reducer;

