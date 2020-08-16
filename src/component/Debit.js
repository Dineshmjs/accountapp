import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NewDebit from './NewDebit';
// import ExitsDebit from './ExitsDebit';
// import NewDebit from './NewDebit';



function Debit() {
    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }

    //const [newdebit, setNewdebit] = useState(false)
    const [credit, setCredit] = useState([])
    const [newDebit, setnewDebit] = useState(false)

    const offline = "http://localhost:2000"
    //const online = "https://accountnote.herokuapp.com"

    useEffect(() => {
        Axios.get(offline + "/credit")
            .then(res => {
                console.log(res.data)
                setCredit(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const click = () =>{
        setnewDebit(true)        
    }
   

    

    return (

        <div>
            {/* <ExitsDebit /><br/>
            <button className="btn w3-green" onClick={()=>setNewdebit(true)}>+ New Debit</button><br />            
            {
                newdebit && <NewDebit /> 
            } */}

            {
                credit.map(data =>
                    <div className="card w3-center mt-2 mb-2 " style={style} key={data._id}>
                        <div className="row" data-toggle="collapse" data-target={`#id${data._id}`}>
                            <div className="col-4">{data.reason}</div>
                            <div className="col-4 text-success">{data.amount}</div>
                            <div className="col-4 text-danger">{data.availableAmount}</div>
                        </div>

                        <div id={`id${data._id}`} className="w3-pale-red collapse hide">
                            <div className="w3-container m-2">
                                <button className="btn btn-success w3-right" onClick={click}>+new</button><br/>
                            </div>
                            {newDebit && (<div className="w3-container">
                                <NewDebit credit={data.reason}/>
                            </div> )}
                                                                                
                            {
                                data.debit.map((debit,index) =>
                                    <div className="row"  >
                                        <div className="col-4">{debit.reason}</div>
                                        <div className="col-4 text-success">{debit.amount}</div>
                                        <div className="col-4 text-danger">{debit.availableAmount}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>)
            }

        </div>
    )

}

export default Debit
