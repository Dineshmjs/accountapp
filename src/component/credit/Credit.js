import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import ViewCredit from './ViewCredit';
import { useDispatch } from 'react-redux';
import { CreditAction } from '../../redux/Action'
import {http} from '../../axios'

function Credit() {
    

    const dispatch = useDispatch()


    const [click, setClick] = useState(1)
    const [data, setData] = useState([])

    console.log("click", click)


    const initialValues = {
        reason: "",
        name: "",
        amount: ""
    }

    const submit = (values, props) => {
        console.log(values)
        setClick(click + 1)

        http.post("credit", values)
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        http.get("credit")
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })

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
                        <button type="submit" className="btn w3-brown mt-3" onClick={() => dispatch(CreditAction(data))}>Submit</button>
                    </div>
                </Form>

            </Formik>

            <ViewCredit click={click} />
        </div>
    )
}

export default Credit
