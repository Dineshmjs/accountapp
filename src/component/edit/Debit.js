import React, { useState, useEffect } from 'react';
import { http } from '../../axios'
import { useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';

function Debit() {

    const reload = useSelector(state => state.debitSubmit)
    const id = useSelector(state => state.creditId)

    const initialDebit = {
        reason: "",
        amount: "",
        availableAmount: ""
    }

    
    const [debit, setdebit] = useState([])
   
    useEffect(() => {
        http.get("debit", { params: { id: id } })
            .then(res => {
                console.log(res.data)
                setdebit(res.data)
            })
            .catch(err => {
                console.log(err)
            })
       
    }, [reload, id])

    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }
    // const decoration = {
    //     textDecoration: "none"
    // }

    const submit = (values) => {
        console.log("edit values", values)
    }

    const validationShema = yup.object({
        reason: yup.string().required("Enter valid string"),
        amount: yup.number().required("plase Enter amount")
    })

    
    return (
        <div className="card w3-center mt-2 mb-2 " key={data._id} style={style}>                                  
            {
                debit.map(data => {                   
                    return (
                        <Formik
                            initialValues={initialDebit}
                            onSubmit={submit}
                            validationShema={validationShema}
                        >
                            <Form>
                                <div className="row" >                                    
                                    <div className="col-4">
                                        <Field type="text" name="reason"  />
                                        <ErrorMessage name="reason" />
                                    </div>
                                    <div className="col-4 text-success">
                                        <Field  />
                                    </div>
                                    <div className="col-2 text-success">
                                        <i className="material-icons">done</i>
                                    </div>
                                    <div className="col-2 text-danger">
                                        <i className="material-icons">delete</i>
                                    </div>
                                </div>
                            </Form>

                        </Formik>
                    )
                })
            }

        </div>
    )
}

export default Debit
