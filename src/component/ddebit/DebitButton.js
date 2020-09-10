import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {ddebitSubmit} from '../../redux/Action';

function CreditButton() {
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    console.log("state",state)
    return (
        <div className="w3-center w3-buttom">
            <button className="btn btn-primary" onClick = {()=>dispatch(ddebitSubmit(true))}>New Debit</button>
        </div>
    )
}

export default CreditButton
