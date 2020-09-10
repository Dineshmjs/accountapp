import React from 'react'
import { Link } from 'react-router-dom'

function BackButton({path,title,color}) {
    const style={
        textDecoration:"none"
    }
    return (
        <div>
            <Link to={path} style={style}>
                <div className={`w3-container w3-center mb-3 ${color}`} >                    
                   <h3 className="p-2">{title}</h3>                    
                </div>               
            </Link>
        </div>
    )
}

export default BackButton
