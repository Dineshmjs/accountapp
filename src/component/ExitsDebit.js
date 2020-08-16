import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';

function ExitsDebit() {

    const initial = {
        mainselect: "",
        subselect: ""
    }
    const [reason, setReason] = useState(initial)
    const [mainselect, setmainSelect] = useState([])
    const [subselect, setsubSelect] = useState([])
    const [amount, setAmount] = useState()
    const [formData, setformData] = useState()


    const offline = "http://localhost:2000"
    //const online = "https://accountnote.herokuapp.com"

    console.log("subselect",subselect)
   

    useEffect(() => {
        Axios.get(offline+"/credit")
            .then(res => {
                console.log("mainselect",res.data)
                setmainSelect(res.data)                
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        if(reason.mainselect){
        Axios.get(offline+"/debit/reason", { params: { credit: reason.mainselect } })
            .then(res => {
                console.log("subselect",res.data.debit)
                const arr = res.data.debit
                setsubSelect(arr)
            })
            .catch(err => {
                console.log(err)
            })
        }    
    }, [reason.mainselect])

    useEffect(() => {
        if(reason.subselect){
        Axios.get(offline+"/debit/amount", { params: {credit:reason.mainselect, debit: reason.subselect } })
            .then(res => {
                console.log("amount", res.data)
                //setAmount(res.data.availableAmount)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [reason.subselect])

    useEffect(() => {
        if (formData) {
            Axios.post(offline+"/debit/exits", formData)
                .then(res => {
                    console.log(res.data)                    
                })
                .catch(err => {
                    console.log(err)
                })
            
            setTimeout(getExits,100)    
        }
    }, [formData])

    const getExits = () =>{
        Axios.get(offline+"/debit/exits")
        .then(res=>{
            console.log("exits",res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const initialValue = {
        credit: "",
        debit: "",        
        reason: "",
        amount: ""
    }
    const submit = (values,props) => {
        console.log(values)
        setformData(values)
        props.resetForm()
        window.location.reload()

    }
    const validationSchema = yup.object({
        credit: yup.string().required("Plese Select Reason"),
        debit: yup.string().required("Plese Select Reason"),
        reason: yup.string().required("Reason Required"),
        amount: yup.string().required("Amount Required")
    })

    return (
        <div>
            <Formik
                initialValues={initialValue}
                onSubmit={submit}
                validationSchema={validationSchema}
            >
                <Form>
                    
                    <div>
                        <Field
                            as="select"
                            name="credit"
                            className="form-control mt-2"    
                            value={reason.mainselect}                        
                            onChange={(e) => setReason({ ...reason, mainselect: e.target.value })}
                        >
                            <option value="">Select Credit</option>
                            {
                                mainselect.map((option, index) => (
                                    <option key={index} value={option.reason} >{option.reason}</option>
                                ))
                            }
                            
                        </Field>
                        <ErrorMessage name="credit" />
                    </div>

                    <div>
                        <Field
                            as="select"
                            name="debit"
                            className="form-control mt-2"     
                            value = {reason.subselect}                        
                            onChange={(e) => setReason({ ...reason, subselect: e.target.value })}
                        >
                            
                            <option value="">Select Debit</option>
                            {
                                subselect.map((option, index) => (
                                    <option key={index} value={option.reason} >{option.reason}</option>
                                ))
                            }
                        </Field>
                        <ErrorMessage name="debit" />
                    </div>

                    <div>
                        <label className="form-control mt-2">Available Amount : {amount}</label>
                    </div>

                    <div>
                        <Field
                            type="text"
                            name="reason"
                            className="form-control mt-2"
                            placeholder="Enter Reason for Debit"
                        />
                        <ErrorMessage name="reason" />
                    </div>

                    <div>
                        <Field
                            type="number"
                            name="amount"
                            className="form-control mt-2"
                            placeholder="Enter amount to Debit"
                        />
                        <ErrorMessage name="amount" />
                    </div>
                    <div className="w3-center">
                        <button type="submit" className="btn w3-red mt-2">Debit</button>
                    </div>
                </Form>

            </Formik>
        </div>
    )
}

export default ExitsDebit
