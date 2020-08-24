import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

function SpendForm() {
    const initialValues = {
        reason: "",
        amount: ""
    }
    const submit = (values, props) => {
        console.log(values)
        props.resetForm()
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
                        <Field type="text" name="reason" className="form-control" />
                        <ErrorMessage name="reason" />
                    </div>

                    <div className="mb-3">
                        <Field type="number" name="amount" className="form-control" />
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