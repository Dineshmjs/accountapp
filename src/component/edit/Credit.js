import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { http } from '../../axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import {Link} from 'react-router-dom'

function Credit() {

    const initialValues = {
        reason: "",
        amount: ""
    }

    const id = useSelector(state => state.creditId)
    const [data, setData] = useState(initialValues)

    useEffect(() => {
        http.get("credit/id", { params: { id: id } })
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
        http.put("credit", valuse)
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
        reason: yup.string().required("Enter valid Reason"),
        amount: yup.number().moreThan(data.amount - data.availableAmount - 1).required("Enter Amount")
    })
    return (
        <div>
            {/* <Link to="/debit">
                <button className="btn btn-primary">Back</button>
            </Link> */}
            <div className="card w3-center mb-3">
                <h5>Update Credit</h5>
            </div>
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

export default Credit
