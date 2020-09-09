import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { http } from '../../axios';
import { useDispatch } from 'react-redux';
import { defaultSubmit } from '../../redux/Action'

function DefaultForm() {

    const dispatch = useDispatch();

    const initialValue = {
        reason: ""
    }

    const submit = (values, formProps) => {
        console.log("form values", values)
        http.post('default', values)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        formProps.resetForm();

        setTimeout(dis,1000)


    }

    const dis = () =>{
        console.log("dispatch")
        dispatch(defaultSubmit(false))
    }

    const validationSchema = yup.object({
        reason: yup.string().required("Enter Purpose")        
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
                    
                    <div className="w3-center">
                        <button className="btn btn-primary" type="submit" >Submit</button>
                    </div>

                </Form>

            </Formik>
        </div>
    )
}

export default DefaultForm
