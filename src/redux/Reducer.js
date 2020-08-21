import {credit} from './Type';

const initialState = {
    data:false
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case credit : return{
            data:action.data
        }
        default :return state
    }
} 

export default reducer;

