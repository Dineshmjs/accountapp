import React from 'react'
import {menuClick} from '../redux/Action' 
import {useDispatch} from 'react-redux'

function Menu() {
    const dispatch = useDispatch()
    return (
        <div className="w3-container w3-green">
            <div className="w3-left">
                <button className="w3-button" onClick={()=>dispatch(menuClick("woi"))}>Without Investment</button>
            </div>
            <div className="w3-right">
                <button className="w3-button" onClick={()=>dispatch(menuClick("wi"))}>With Investment</button>
            </div>
        </div>
    )
}

export default Menu
