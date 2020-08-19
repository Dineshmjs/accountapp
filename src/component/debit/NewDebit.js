import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {http} from '../../axios';
import ViewDebit from './ViewDebit';


function NewDebit({credit,amount}) {

    const [reload, setreload] = useState(1);
        
    // console.log("data",data)
    const initialValue = {
        reason: "",
        amount: "",
        credit:credit
    }
    const submit = (values, props) => {
        console.log(values)    

        http.post("debit",values)
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        setreload(reload+1)    

        props.resetForm()
    }
    const validationSchema = yup.object({
        reason: yup.string().required("Required"),
        amount: yup.string().required("Required")
    })

    const style = {
        width: {
            width: "95%",
            marginLeft: "3px"
        }
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
                        <div className="col-5 p-0 " >
                            <Field
                                type="text"
                                name="reason"
                                className="form-control mb-2"
                                style={style.width}
                            />
                            <ErrorMessage name="reason" />
                        </div>
                        <div className="col-4 p-0 ">
                            <Field
                                type="number"
                                name="amount"
                                className="form-control mb-2"
                                style={style.width}
                            />
                            <ErrorMessage name="amount" />
                        </div>
                        <div className="col-3 p-0 w3-center " >
                            <button className="btn btn-success w3-left ml-2" type="submit" >Add</button>
                        </div>
                    </div>
                </Form>
            </Formik>

            <ViewDebit credit = {credit} reload={reload}  availableAmount={amount}/>
        </div>
    )
}

export default NewDebit
