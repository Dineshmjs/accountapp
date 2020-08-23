import React, { useState, useEffect } from 'react';
import { http } from '../../axios'
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
// import { debitId } from '../../redux/Action'



function Credit() {


    const reload = useSelector(state => state.debitSubmit)
    const id = useSelector(state => state.creditId)

    const initialCredit = {
        reason: "",
        amount: "",
        availableAmount: ""
    }


    const [credit, setcredit] = useState(initialCredit)
    useEffect(() => {

        http.get("credit/id", { params: { id: id } })
            .then(res => {
                console.log("credit id",res.data)
                setcredit(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload, id])

    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }

    const submit = (values) => {
        console.log("edit values", values)
    }

    const validationShema = yup.object({
        reason: yup.string().required("Enter valid string"),
        amount: yup.number().required("plase Enter amount")
    })

    // const initialValues = {

    // }

    console.log("rerender")

    return (
        <div className="card w3-teal w3-center mt-2 mb-2 " style={style} >
            <Formik
                initialValues={credit}
                onSubmit={submit}
                validationShema={validationShema}
                enableReinitialize
            >
                <Form>
                    <div className="row" >
                        <div className="col-4 ">
                            <Field type="text" name="reason" className="form-control" />
                            <ErrorMessage name="reason" />
                        </div>

                        <div className="col-4 ">
                            <Field type="number" name="amount" className="form-control" />
                            <ErrorMessage name="amount" />
                        </div>
                        <div className="col-2 ">
                            <i className="material-icons">done</i>
                        </div>
                        <div className="col-2">
                            <i className="material-icons">delete</i>
                        </div>
                    </div>
                </Form>

            </Formik>

        </div>
    )
}

export default Credit
