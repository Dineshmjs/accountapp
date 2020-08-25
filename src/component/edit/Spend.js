import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { http } from '../../axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import BackButton from '../BackButton';

function Spend() {
   
    const id = useSelector(state => state.spendId) 


    const initialValues = {
        reason: "",
        amount: ""
    }

    
    const [data, setData] = useState(initialValues)

    useEffect(() => {
        http.get("spend/id", { params: { id: id } })
            .then(res => {
                // console.log("debit",res.data)
                setData(res.data)
            })
            .catch(err => {
                // console.log(err)
            })
        
    }, [])


    const submit = (values, props) => {
       
        // console.log("submit",values)

        http.put("spend", values)
            .then(res => {
                // console.log(res.data)
                if (res.data.ok === 1) {
                    alert("Success")
                }
                if (res.data.ok === 0) {
                    alert("update Unsuccess")
                }
            })
            .catch(err => {
                // console.log(err)
            })
    }

    const validationSchema = yup.object({
        reason: yup.string().required("Enter valid Reason"),
        amount: yup.number().moreThan(0).required("Enter Amount")
    })

    return (
        <div>            
            <BackButton path="default" title="Update Spend" color="w3-brown" />
            <div className="container">
                <Formik
                    initialValues={data || initialValues}
                    onSubmit={submit}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    <Form>
                        <div>
                            <Field type="text" name="reason" className="mb-2 ml-2 form-control" />
                            <ErrorMessage name="reason" />
                        </div>
                        <div>
                            <Field type="number" name="amount" className="mb-2 ml-2 form-control" />
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

export default Spend


