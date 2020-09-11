import React from 'react'
import {useDispatch} from 'react-redux'
import { editMenu } from '../../redux/Action';

function Menu() {
    const dispatch = useDispatch()
    return (
        <div className="w3-container w3-center mt-2 mb-3">
            <div className="row">
                <div className="col-4">
                    <button className="btn w3-teal" onClick={()=>dispatch(editMenu("addmoney"))}>Add Money</button>
                </div>
                <div className="col-4">
                    <button className="btn w3-teal" onClick={()=>dispatch(editMenu("reducemoney"))}>Reduce Money</button>
                </div>
                <div className="col-4">
                    <button className="btn w3-teal" onClick={()=>dispatch(editMenu("reason"))} >Change Reason</button>
                </div>
            </div>
        </div>
    )
}

export default Menu
