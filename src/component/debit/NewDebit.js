import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import ViewDebit from './ViewDebit';


function NewDebit(props) {

    const offline = "http://localhost:2000"
    //const online = "https://accountnote.herokuapp.com"

    const [reload, setreload] = useState(0);

    

    const initialValue = {
        reason: "",
        amount: "",
        credit:props.credit
    }
    const submit = (values, props) => {
        console.log(values)    

        Axios.post(offline+"/debit",values)
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

            <ViewDebit data = {props.data} reload={reload} credit = {props.credit}/>
        </div>
    )
}

export default NewDebit
