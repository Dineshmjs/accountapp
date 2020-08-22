import React from 'react'
import {useDispatch} from 'react-redux';
import {debitSubmit} from '../../redux/Action';

function CreditButton() {
    const dispatch = useDispatch()
    return (
        <div className="w3-center w3-buttom">
            <button className="btn btn-primary" onClick = {()=>dispatch(debitSubmit(true))}>New Debit</button>
        </div>
    )
}

export default CreditButton
