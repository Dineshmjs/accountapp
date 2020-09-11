import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup' 

function ChangeReason() {
    
    const initialValues = {
        name:"reason",
        reason: ""
    }

    const submit = (value, props) => {
        console.log("values", value)
        props.resetForm()
    }

    const  validationSchema = yup.object({
        reason:yup.string().required("Please Enter Valid Reason")
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
                        <Field type="text" name="reason" className="form-control"  placeholder="Enter Valid Reason" />
                        <ErrorMessage name="reason" />
                    </div>
                    <div className="form-group w3-center">
                        <button type="submit" className="btn w3-purple">Update</button>
                    </div>
                </Form>

            </Formik>
        </div>

    )
}

export default ChangeReason
