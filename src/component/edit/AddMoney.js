import React from 'react'
import {useDispatch} from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup' 
import { http } from '../../axios'
import {reLoad} from '../../redux/Action'

function AddMoney({data,path,loadData}) {
    console.log("addmoney",data)

    const initialValues = {
        name:"addmoney",
        amount: 1,
        id:data._id
    }

    const submit = (values, props) => {
        console.log("values", values)
        console.log("data",data)
        http.put("credit",values)
        .then(res=>{
            if(res.data.ok === 1){
                alert("Money Added")
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
        amount:yup.number().moreThan(0).required("Please Enter Valid Amount")
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
                        <button type="submit" className="btn w3-purple" >Update</button>
                    </div>
                </Form>

            </Formik>
        </div>

    )
}

export default AddMoney
