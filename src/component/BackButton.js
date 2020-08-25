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
                   <h4 className="mt-2">{title}</h4>                    
                </div>               
            </Link>
        </div>
    )
}

export default BackButton
