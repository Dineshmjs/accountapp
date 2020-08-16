import React from 'react'
import { Formik, Field} from 'formik'

function Formikprops() {
    return (
       
            <Formik>
            {
                props=>{
                    console.log(props)
                    return(
                        <Form>
                            <Field type="text" name="name" />
                        </Form>
                    )
                }
            }
            </Formik>
        
    )
}

export default Formikprops
