import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import Axios from 'axios';

function Credit() {

    const [formData, setformData] = useState()  
    const offline = {
        post : "http://localhost:2000/credit",
        get : "http://localhost:2000/credit"
    }  
    const online = {
        post : "http://localhost:2000/credit",
        get : "http://localhost:2000/credit"
    }  


    useEffect(() => {
        console.log("useEffect")
        if (formData) {
            Axios.post(offline.post, formData)
                .then((res) => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })   
            setTimeout(get,1000)                 
        }
    })

    const get=()=>{
        Axios.get(offline.get)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const initialValues = {
        reason: "",
        name: "",
        amount: ""        
    }

    const submit = (values,props) => {
        console.log(values)
        setformData(values)
        props.resetForm()
    }

    const validattionSchema = yup.object({
        reason: yup.string().required("Required reason"),
        name: yup.string().required("Required"),
        amount: yup.string().required("Required")

    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validattionSchema}
            >
                <Form>
                    <div>
                        <Field type="text" name="reason" className="form-control mt-3" placeholder="Enter Purpose of The Amount " />
                        <ErrorMessage name="reason" />
                    </div>
                    <div>
                        <Field type="number" name="amount" className="form-control mt-3" placeholder="Enter Amount To Credite" />
                        <ErrorMessage name="amount" />
                    </div>
                    <div>
                        <Field type="text" name="name" className="form-control mt-3" placeholder="Enter your name" />
                        <ErrorMessage name="name" />
                    </div>
                    <div className="w3-center">
                        <button type="submit"  className="btn w3-brown mt-3">Submit</button>
                    </div>
                </Form>

            </Formik>
        </div>
    )
}

export default Credit
