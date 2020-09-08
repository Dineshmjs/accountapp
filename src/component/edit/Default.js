import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { http } from '../../axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import BackButton from '../BackButton';
// import {Link} from 'react-router-dom'

function Default() {
    
    const initialValues = {
        reason: ""
    }

    const id = useSelector(state => state.defaultId)
    const [data, setData] = useState(initialValues)

    useEffect(() => {
        http.get("default/id", { params: { id: id } })
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const submit = (valuse, props) => {
        console.log(valuse)
        http.put("default", valuse)
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
        reason: yup.string().required("Enter valid Reason")        
    })
    return (
        <div>   
            <BackButton path="ddebit" title="Update Default" color="w3-purple" />         
            
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
                        <div className="w3-center">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default Default
