import React from 'react'
<<<<<<< HEAD

function Menu() {
    return (
        <div>
           Menu 
=======
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
>>>>>>> 1bcd86d8da2f49e4086e4f72dde9a7f04a29ac56
        </div>
    )
}

export default Menu
