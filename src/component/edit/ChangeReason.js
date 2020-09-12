import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup' 
import {http} from '../../axios'

function ChangeReason({data,path,loadData}) {
    
    const initialValues = {
        name:"reason",
        reason: data.reason,
        id:data._id
    }

    const submit = (values, props) => {
        console.log("values", values)

        http.put("credit",values)
        .then(res=>{
            if(res.data.ok === 1){
                alert("Reason Changed Successfully")
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
        reason:yup.string().required("Please Enter Valid Reason")
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
