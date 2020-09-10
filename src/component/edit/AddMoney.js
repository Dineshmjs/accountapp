import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'

function AddMoney() {

    const initialValues={
        amount:0
    }

    const submit =(value,props) =>{
        console.log("values",value)
        props.resetForm()
    }

    

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submit}
            // validationSchema={validationSchema}
        >
            <Form>
                <div className="form-group">
                    <Field type="number" name="add" placeholder="100" />
                    <ErrorMessage name="add" />
                </div>
            </Form>
            
        </Formik>
    )
}

export default AddMoney
