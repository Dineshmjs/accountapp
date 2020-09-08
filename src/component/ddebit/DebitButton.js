import React from 'react'
import {useDispatch} from 'react-redux';
import {ddebitSubmit} from '../../redux/Action';

function CreditButton() {
    const dispatch = useDispatch()
    return (
        <div className="w3-center w3-buttom">
            <button className="btn btn-primary" onClick = {()=>dispatch(ddebitSubmit(true))}>New Debit</button>
        </div>
    )
}

export default CreditButton
