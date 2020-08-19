import {credit} from './Type';

const initialState = {
    credit:[]
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case credit : return{
            credit:action.data
        }
        default :return state
    }
} 

export default reducer;

