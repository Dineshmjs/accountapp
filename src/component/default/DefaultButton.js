import React from 'react'
import {useDispatch} from 'react-redux';
import {defaultSubmit} from '../../redux/Action';

function DefaultButton() {    
    const dispatch = useDispatch()
   
    return (
        <div className="w3-center w3-buttom">
            <button className="btn btn-primary mt-3" onClick = {()=>dispatch(defaultSubmit(true))}>+ New</button>
        </div>
    )
}

export default DefaultButton
