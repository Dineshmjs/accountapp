import React from 'react'

function Menu() {
    return (
        <div className="w3-container w3-center mt-2 mb-2">
            <div className="row">
                <div className="col-4">
                    <button className="btn w3-teal">Add Money</button>
                </div>
                <div className="col-4">
                    <button className="btn w3-teal">Reduce Money</button>
                </div>
                <div className="col-4">
                    <button className="btn w3-teal" >Change Reason</button>
                </div>
            </div>
        </div>
    )
}

export default Menu
