import React from 'react'
import {useDispatch} from 'react-redux'
import {spendSubmit} from '../../redux/Action'


function SpendButton() {
    const dispatch = useDispatch() 
    return (
        <div className="w3-center mt-3">
            <button className="btn btn-primary" onClick={()=>dispatch(spendSubmit(true))}>SpendMoney</button>
        </div>
    )
}

export default SpendButton
