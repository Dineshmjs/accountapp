import React, { useState } from 'react';
import ExitsDebit from './ExitsDebit';
import NewDebit from './NewDebit';



function Debit() {
    const [newdebit, setNewdebit] = useState(false)
   
    return (
        
        <div className="container">
            <ExitsDebit /><br/>
            <button className="btn w3-green" onClick={()=>setNewdebit(true)}>+ New Debit</button><br />            
            {
                newdebit && <NewDebit /> 
            }
        </div>
    )
}

export default Debit
