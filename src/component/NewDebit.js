import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';


function NewDebit(props) {
    
    const initialValue = {
       reason:"",
       amount:""
    }
    const submit = (values, props) => {        
                console.log(values)
    }
    const validationSchema = yup.object({
      reason:yup.string().required("Required"),
      amount:yup.string().required("Required")  
    })

    const style = {
        marginLeft:"4px"
    }

    



    return (
        <div className="mt-3" id="newDebit">
            <Formik
                initialValues={initialValue}
                onSubmit={submit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="row">
                    <div className="col-5 p-0" >
                        <Field
                            type="text"
                            name="reason"
                            className="form-control mb-2 p-0"                            
                        />
                        <ErrorMessage name="reason" />
                    </div>
                    <div className="col-4 p-0" >
                        <Field
                            type="text"
                            name="amount"
                            className="form-control mb-2"                            
                        />
                        <ErrorMessage name="amount" />
                    </div>
                    <div className="col-3 p-0" > 
                        <button className="btn btn-success w3-left" >Submit</button>
                    </div>
                    </div> 
                   
                </Form>

            </Formik>
        </div>
    )
}

export default NewDebit
