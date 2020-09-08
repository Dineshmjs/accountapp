import React from 'react'
import {useDispatch} from 'react-redux';
import {creditSubmit} from '../../redux/Action';

function CreditButton() {    
    const dispatch = useDispatch()
   
    return (
        <div className="w3-center w3-buttom">
            <button className="btn btn-primary mt-3" onClick = {()=>dispatch(creditSubmit(true))}>+ New Credit</button>
        </div>
    )
}

export default CreditButton
