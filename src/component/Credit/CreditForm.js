import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

function CreditForm() {

    const initialValue = {
        reason: "",
        amount: ""
    }

    const submit = (values) => {
        console.log("form values", values)
    }

    const validationSchema = yup.object({
        reason: yup.string().required("Enter Purpose"),
        amount: yup.string().required("Enter Amount")
    })

    return (
        <div className="container">
            <Formik
                initialValues={initialValue}
                onSubmit={submit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div>
                        <Field type="text" name="reason" placeholder="Enter purpose" className="form-control m-2" />
                        <ErrorMessage name="reason" />
                    </div>

                    <div>
                        <Field type="number" name="amount" placeholder="Enter amount" className="form-control m-2" />
                        <ErrorMessage name="amount" />
                    </div>

                    <div className="w3-center">
                        <button className="btn btn-primary">Submit</button>
                    </div>

                </Form>

            </Formik>
        </div>
    )
}

export default CreditForm
