//Login's Forms using Formik with yup Method(initialValue,onSubmit, Schema's)



import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
function LoginForms({handleNext}) {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
            handleNext()
        },
        validationSchema: yup.object({
            email: yup.string().email().required('This field is required.'),
            password: yup.string()
                .min(6, 'Password is too short.')
                .max(12, 'Password is too long.')
                .required('This field is required.')
        })

    })
    return (
        <div>
            <h1 style={{color:'ThreeDShadow'}}> LOG'IN_FORM! </h1>
            <form onSubmit={formik.handleSubmit} >
                <span>
                    <label>
                    <input style={{height:'30px', width:'180px', color:'blanchedalmond'}}  type="text" id='email' onChange={formik.handleChange} value={formik.values.email} placeholder="Enter an email" />

                        {/* To show warning messages */}

                        {formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : ''}
                    </label>
                </span>
                <br /> <br />

                <span>
                    <label>
                    <input style={{height:'30px', width:'180px', color:'blanchedalmond'}}  type="passwrod" id='password' onChange={formik.handleChange} value={formik.values.password} placeholder="**********" />

                        {/* To show warning messages */}

                        {formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : ''}

                    </label>
                </span> <br /> <br />

                <span>
                    <button style={{ width: '90px', height: '30px', margin: '0%', marginLeft: '7%', backgroundColor:'green', color:'whitesmoke', border:'15px' }}  type="submit" >
                        Submit
                    </button>
                </span>
            </form>
        </div>
    );
}

export default LoginForms;
