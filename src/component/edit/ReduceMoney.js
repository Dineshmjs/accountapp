import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup' 

function ReduceMoney() {
    
    const initialValues = {
        name:"reducemoney",
        amount: 0
    }

    const submit = (value, props) => {
        console.log("values", value)
        props.resetForm()
    }

    const  validationSchema = yup.object({
        amount:yup.number().moreThan(0).required("Please Enter Valid Amount")
    })



    return (
        <div className="container">
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
            validationSchema={validationSchema}
            >
                <Form>
                    <div className="form-group">
                        <Field type="number" name="amount" className="form-control" />
                        <ErrorMessage name="amount" />
                    </div>
                    <div className="form-group w3-center">
                        <button type="submit" className="btn w3-purple">Update</button>
                    </div>
                </Form>
            </Formik>
        </div>

    )
}

export default ReduceMoney
