import React,{useEffect} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { http } from '../../axios';
import { useSelector,useDispatch } from 'react-redux';
import { ddebitSubmit } from '../../redux/Action'

function DebitForm() {

    const id = useSelector(state=>state.defaultId)
    const reload = useSelector(state => state.ddebitSubmit)   
     
   
    const dispatch = useDispatch();
    console.log(id)


    const initialValue = {
        default:id,
        reason: "",
        amount: ""
    }

    useEffect(() => {
        http.get("defult/id",{params:{id:id}})
            .then(res => {
                console.log("av",res.data)                
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload, id])

    const submit = (values, formProps) => {
        console.log("form values", values)
        http.post('ddebit', values)
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
        dispatch(ddebitSubmit(false))
    }

    const validationSchema = yup.object({
        reason: yup.string().required("Enter Purpose"),
        amount: yup.number().required("Enter Amount")
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

                    <div>
                        <Field type="number" name="amount" placeholder="Enter amount" className="form-control m-2" />
                        <ErrorMessage name="amount" />
                    </div>

                    <div className="w3-center">
                        <button className="btn btn-primary" type="submit" >Submit</button>
                    </div>

                </Form>

            </Formik>
        </div>
    )
}

export default DebitForm
