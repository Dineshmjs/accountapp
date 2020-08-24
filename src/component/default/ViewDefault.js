import React from 'react'
import {Link} from 'react-router-dom'

function ViewDefault() {
    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }
    const decoration = {
        textDecoration:"none"
    }
    return (
        <div className="container">
            <Link to="/default" style={decoration}>
                <div className="card  mt-2 mb-2 " style={style} >
                   <p className="w3-center m-0 p-0">Default</p>
                </div>
            </Link>
        </div>
    )
}

export default ViewDefault
