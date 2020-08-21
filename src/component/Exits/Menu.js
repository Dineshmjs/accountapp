import React, {useState} from 'react';
// import Body from './Body';

function Menu() {

    const [state, setstate] = useState("Credit")
    const style = {
        margin:{
            marginLeft:"15%"
        }
    }

    
    return (
        
        <div className="container mt-1">
            <ul className="nav nav-pills" role="tablist" style={style.margin} > 
                <li className="nav-item">
                    <button className="btn btn-primary nav-link active" onClick={()=>setstate("Credit")}>Creadit</button>
                </li>
                <li className="nav-item">
                    <button className="btn nav-link" onClick={()=>setstate("Debit")}>Debite</button>
                </li>
                <li className="nav-item">
                    <button className="btn nav-link" onClick={()=>setstate("View")}>View</button>
                </li>
            </ul>      

            {/* <Body component = {state} />      */}
        </div>
        
    )
}

export default Menu
