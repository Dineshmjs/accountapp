import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';


function NewDebit() {
    const [amount, setAmount] = useState()
    const [reason, setReason] = useState()
    const [formData, setformData] = useState()
    const [credit, setCredit] = useState([])

    console.log(formData)

    //const offline = "http://localhost:2000"
    const online = "https://accountnote.herokuapp.com"


    useEffect(() => {
        if (formData) {
            Axios.post(online+"/debit", formData)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })

            setTimeout(get, 1000)
        }
    },[formData])

    useEffect(() => {
        Axios.get(online+"/credit")
            .then(res => {
                console.log(res.data)
                setCredit(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        if (reason) {
            Axios.get(online+"/credit/amount", { params: { reason: reason } })
                .then(res => {
                    setAmount(res.data.availableAmount)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }, [reason])



    const get = () => {
        Axios.get(online+"/debit")
            .then(res => {
                console.log(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }



    const initialValue = {
        credit: "",
        reason: "",
        amount: ""
    }
    const submit = (values, props) => {        
        setformData(values)
        props.resetForm()        

    }
    const validationSchema = yup.object({
        credit: yup.string().required("Plese Select Reason"),
        reason: yup.string().required("Reason Required"),
        amount: yup.string().required("Amount Required")
    })



    return (
        <div className="mt-3">
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
                            placeholder="Enter Reason for Debit"
                            onClick={(e) => setReason(e.target.value)}
                        //value={reason}                                                                               
                        >
                            <option value="" amount="">Select From</option>
                            {
                                credit.map((option, index) => (
                                    <option key={index} value={option.reason} >{option.reason}</option>
                                ))
                            }
                        </Field>
                        <ErrorMessage name="credit" />
                    </div>

                    <div>
                        <Field
                            type="text"
                            name="available"
                            className="form-control mt-2"
                            value={`available Amount ${amount}`}
                            disabled
                        />
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
                        <button type="submit" className="btn w3-red mt-2" >Debit</button>
                    </div>
                </Form>

            </Formik>
        </div>
    )
}

export default NewDebit
