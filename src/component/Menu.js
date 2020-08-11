import React from 'react'

function Menu() {
    const style = {
        margin:{
            marginLeft:"15%"
        }
    }
    return (
        
        <div className="container mt-1">
            <ul className="nav nav-pills" role="tablist" style={style.margin} > 
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" href="#credite">Creadit</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#debite">Debite</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#view">View</a>
                </li>
            </ul>           
        </div>
        
    )
}

export default Menu
