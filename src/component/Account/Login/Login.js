import React from 'react'
import './login.css'
import { useFormik } from 'formik';
import { loginSchema } from './LoginSchema'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
function Login() {

    let navigate = useNavigate()
    const loginFormik = useFormik(
        {
            initialValues:{
                email:'',
                password:''
            },
            onSubmit:(values)=>{
                console.log(values)
                axios.post("http://localhost:7000/client/signin",values).then((res)=>{
                    // console.log(res)
                    if(res.status == 200)
                    {
                        console.log(res)
                        localStorage.setItem("token",res.headers.authorization);
                        navigate("/home")
                    }
                    else
                    {
                        console.log("eror")
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            },


            validationSchema: loginSchema
            
        }
    )
        // console.log(loginFormik.values)
    return (
        <>
        <div className=' parent_login_form container'>
            <div className='row'>
                <div className='col-12'>
                    
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>

                    <form className='login_form ' method='post' onSubmit={loginFormik.handleSubmit} >
                        {/* Email input */}
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example1">البريد الألكتروني</label>
                            <input className='form-control mb-2' 
                            type="email"  id="form2Example1" 
                            name='email' 
                            value={loginFormik.values.email} onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} />
                            <small className={loginFormik.touched.email && loginFormik.errors.email ? 'alert alert-danger py-0 px-1 ':null}>{loginFormik.touched.email &&loginFormik.errors.email}</small>
                        </div>

                        {/* Password input  */}
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example2">كلمة السر</label>
                            <input  className="form-control mb-2"
                            type="password" id="form2Example2" 
                            name='password' 
                            value={loginFormik.values.password} onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur}  />
                            <small className={loginFormik.touched.password && loginFormik.errors.password ? 'alert alert-danger py-0 px-1 ':null}>{loginFormik.touched.password &&loginFormik.errors.password}</small>
                        </div>

                        {/* 2 column grid layout for inline styling */}
                        <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                                {/* Checkbox  */}
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                                </div>
                            </div>

                            <div class="col">
                                {/* Simple link  */}
                                <NavLink to='/login'>
                                هل لديك حساب بالفعل؟        
                                </NavLink> 
                            </div>
                        </div>

                        {/* Submit button  */}
                        <div className='text-center mb-4'>

                            <button type="submit" class="login_btn" disabled={!loginFormik.isValid}>دخول</button>
                        </div>

                        {/* <div class="text-center mb-5">
                            <p>Not a member? <a href="#!">Register</a></p>
                            <p>or sign up with:</p>
                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-google"></i>
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-twitter"></i>
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-github"></i>
                            </button>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}

export default Login