import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup' 
import {http} from '../../axios'

function ReduceMoney({data,path,loadData}) {
    
    const initialValues = {
        name:"reducemoney",
        amount: 1,
        id:data._id
    }

    const submit = (values, props) => {
        console.log("values", values)

        http.put("credit",values)
        .then(res=>{
            if(res.data.ok === 1){
                alert("Reduce Money Success")
                loadData()
            }
            else{
                alert("Error")
            }
            console.log("addMoney",res.data)
        })
        .catch(err=>{
            console.log("addMoney",err)
        })

        props.resetForm()
    }

    const  validationSchema = yup.object({
        amount:yup.number().lessThan(data.availableAmount + 1).moreThan(0).required("Please Enter Valid Amount")
    })



    return (
        <div className="container">
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
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
