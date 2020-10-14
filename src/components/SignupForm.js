//Signup Forms using Formik Method(initialValue,onSubmit, validate values)

import React from 'react'
import { useFormik } from 'formik';
function SignupForms({handleNext}) {
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            gender:'',
            cellnumber: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        onSubmit: (values) => {
            console.log(values)
            handleNext()
        },
        validate: (values) => {

            const error = {}

            if (!values.fname) {
                error.fname = 'Email is required';
            }

            if (!values.email) {
                error.email = 'Email is required';
            }

            if (!values.password) {
                error.password = 'Password is required';
            }
            if (!values.confirmpassword) {
                error.password = 'Password is required';
            }

            return error;


        }
    })
    return (
        <div>
            <h1 style={{color:'ThreeDShadow'}}> SIGN'UP_FORMS! </h1>
            <form onSubmit={formik.handleSubmit} >
                <span>
                    <label>
                        <input style={{height:'30px', width:'180px', color:'blanchedalmond'}} type="text" id='fname' onChange={formik.handleChange} value={formik.values.fname} placeholder="Enter your FirstName" />

                        {/* To show warning messages */}

                        {formik.errors.fname ? <div style={{ color: 'red' }}>{formik.errors.fname}</div> : ''}
                    </label>
                </span>
                <br /> <br />
                <span>
                    <label>
                        <input style={{height:'30px', width:'180px', color:'blanchedalmond'}}  type="text" id='lname' onChange={formik.handleChange} value={formik.values.lname} placeholder="Enter your LastName" />
                    </label>
                </span>
                <br /> <br />
                

<select style={{height:'30px', width:'180px', backgroundColor:'blanchedalmond'}}  type="text" id='gender' onChange={formik.handleChange} value={formik.values.gender}>
  
<option >Choose Sex</option>
<option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
  
</select>

                <br/> <br/>

                <span>
                    <label>
                        <input style={{height:'30px', width:'180px', color:'blanchedalmond'}}  type="number" id='cellnumber' onChange={formik.handleChange} value={formik.values.cellnumber} placeholder="031666*****" />
                    </label>
                </span>
                <br /> <br />

                <span>
                    <label>
                        <input style={{height:'30px', width:'180px', color:'blanchedalmond'}}  type="text" id='email' onChange={formik.handleChange} value={formik.values.email} placeholder="Enter your Email Address" />

                        {/* To show warning messages */}

                        {formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : ''}
                    </label>
                </span>
                <br /> <br />

                <span>
                    <label>
                        <input style={{height:'30px', width:'180px', color:'blanchedalmond'}}  type="passwrod" id='password' onChange={formik.handleChange} value={formik.values.password} placeholder="Password" />

                        {/* To show warning messages */}

                        {formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : ''}

                    </label>
                </span> <br /> <br />

                <span>
                    <label>
                        <input style={{height:'30px', width:'180px', color:'blanchedalmond'}}  type="passwrod" id='confirmpassword' onChange={formik.handleChange} value={formik.values.confirmpassword} placeholder="Confirm your password" />

                        {/* To show warning messages */}

                        {formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : ''}

                    </label>
                </span> <br /> <br />

                <span>

                    <button style={{ width: '90px', height: '30px', margin: '0%', marginLeft: '7%', backgroundColor:'green', color:'whitesmoke', border:'15px' }} type="submit" >
                        Submit
                    </button>
                </span>
            </form>
        </div>
    );
}

export default SignupForms;
