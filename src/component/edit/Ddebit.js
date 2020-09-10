import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { http } from '../../axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import BackButton from '../BackButton';
// import {Link} from 'react-router-dom'

function Ddebit() {
    const id = useSelector(state => state.ddebitId)
    // const defaultId = useSelector(state => state.defaultId)   


    const initialValues = {
        reason: "",
        amount: ""
    }

    
    const [data, setData] = useState(initialValues)

    useEffect(() => {
        http.get("ddebit/id", { params: { id: id } })
            .then(res => {
                console.log("ddebit",res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        // http.get("default/id", { params: { id: defaultId } })
        //     .then(res => {
        //         console.log("default",res.data)                
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }, [])


    const submit = (values, props) => {
        
        //values = {...values,availableAmount:values.amount,creditav:av-values.amount}
        console.log("submit",values)

        http.put("ddebit", values)
            .then(res => {
                console.log(res.data)
                if (res.data.ok === 1) {
                    alert("Success")
                }
                if (res.data.ok === 0) {
                    alert("update Unsuccess")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const validationSchema = yup.object({
        reason: yup.string().required("Enter Valid Reason"),
        amount: yup.number().required("Enter Amount")
    })

    return (
        <div>            
            <BackButton path="ddebit" title="Update Default Debit" color="w3-pink" />
            <div className="container">
                <Formik
                    initialValues={data || initialValues}
                    onSubmit={submit}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    <Form>
                        <div>
                            <Field type="text" name="reason" className="mb-2 ml-2 form-control" placeholder="Enter Valid Reason" />
                            <ErrorMessage name="reason" />
                        </div>
                        <div>
                            <Field type="number" name="amount" className="mb-2 ml-2 form-control" placeholder="Enter Valid Amount" />
                            <ErrorMessage name="amount" />
                        </div>
                        <div className="w3-center">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Ddebit
