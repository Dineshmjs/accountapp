import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { spendSubmit, spendDelete } from '../../redux/Action'
import { http } from '../../axios'

function SpendForm() {
    const dispatch = useDispatch()
    const initialValues = {
        reason: "",
        amount: ""
    }
    const submit = (values, props) => {
        console.log("subit spend",values)
        http.post("spend", values)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        props.resetForm()
        dispatch(spendSubmit(false))
        dispatch(spendDelete())

    }
    const validationSchema = yup.object({
        reason: yup.string().required("Enter reason"),
        amount: yup.number().required("Enter amount")
    })
    return (
        <div className="container">
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="mb-3">
                        <Field type="text" name="reason" className="form-control" placeholder="Enter Reason" />
                        <ErrorMessage name="reason" />
                    </div>

                    <div className="mb-3">
                        <Field type="number" name="amount" className="form-control" placeholder="Enter Amount" />
                        <ErrorMessage name="amount" />
                    </div>

                    <div className="w3-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </Form>

            </Formik>
        </div>

    )
}

export default SpendForm    