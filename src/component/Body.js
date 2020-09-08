import React from 'react'
import {useSelector} from 'react-redux'
import Default from './default'
import Credit from './credit'

function Body() {
    const menu = useSelector(state=>state.menu)
    console.log("menu",menu)
    return (
        <div>
            {
                menu==="woi" && <Default />                
            }
            {
                menu === "wi" && <Credit />
            }
        </div>
    )
}

export default Body
