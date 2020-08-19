import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NewDebit from './NewDebit';
// import {useSelector} from 'react-redux';



function Debit(props) {
    console.log("props",props)
    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }
   
    const [credit, setCredit] = useState([])
    
   
    
    const offline = "http://localhost:2000"
    //const online = "https://accountnote.herokuapp.com"

    useEffect(() => {
        get()
    }, [])

    const get =() =>{
        Axios.get(offline + "/credit")
            .then(res => {
                console.log(res.data)
                setCredit(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

   

    

    return (

        <div>
           
            {
                credit.map(data =>
                    <div className="card w3-center mt-2 mb-2 " style={style} key={data._id}>
                        <div className="row" data-toggle="collapse" data-target={`#id${data._id}`}>
                            <div className="col-6">{data.reason}</div>
                            <div className="col-6 text-success">{data.amount}</div>                            
                        </div>

                        <div id={`id${data._id}`} className="w3-pale-red collapse hide">                            
                            <div className="w3-container">
                                <NewDebit credit={data.reason} data={data.debit}/>                                
                            </div>   
                        </div>
                    </div>)
            }

        </div>
    )

}



export default Debit
