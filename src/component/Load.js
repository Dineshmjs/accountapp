import React from 'react'
import { reLoad } from '../redux/Action'
import { useDispatch } from 'react-redux'

function Load() {
    const dispatch = useDispatch()       
    return (
        <div className="w3-center">
            <button className="btn w3-circle" onClick={() => dispatch(reLoad())}>
                <i className="material-icons">replay</i>
            </button>
        </div>
    )
}

export default Load
