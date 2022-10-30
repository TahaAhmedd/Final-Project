import './navpar.css'
import logo from '../../images/landing/logo.png'
import user from '../../images/landing/user.png'
import { useNavigate, NavLink } from 'react-router-dom'
import {  useEffect, useState } from 'react'
import { Snai3ycontext } from '../ProfileSnai3y/context'
import { useDispatch, useSelector } from 'react-redux'
import { getDataClient } from '../../Redux/Slices/ClientReducer'
import { getSnai3y } from '../../Redux/Slices/Snai3yReducer'
function Navpar() {

    // const {data, setData} = useState(Snai3ycontext)
    const role = localStorage.getItem("snai3yRole");
    // let [dataUser,setDataUser] = useState() ;//Snai3y Data
    let snai3yData = useSelector(state => state.Snai3yReducer.data);
    let clientData = useSelector(state => state.ClientReducer.clintdata) 

    let dataUser ;

    if( role == "sanai3y"){
        // setDataUser(snai3yData)
        dataUser = snai3yData
        console.log(dataUser)
    }
    else if(role == "client") {
        // setDataUser(clientData)
        dataUser = clientData
        // console.log(dataUser)
    }
    else dataUser = ""

    // console.log(data)


    let token = localStorage.getItem("token")
    const navigate = useNavigate() 
    const imageUser = localStorage.getItem("image");
    const userName = localStorage.getItem("Name");


    function logout() {
        // localStorage.removeItem("token");
        // localStorage.removeItem("Name");
        // localStorage.removeItem("snai3yRole");
        localStorage.clear()
        navigate("/login");
    }
    return (
        <div lang='ltr' >
            <nav className="navbar navbar_project navbar-expand-lg navbar-dark p-0">
                <div className='container'>

                    <NavLink to='/' className="navbar-brand" style={{ width: "80px" }}>

                        <img src={logo} className="brand" style={{ width: "100%" }}></img>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item active list_navpar">
                                <NavLink to="/home">
                                    {/* <lord-icon
                                    src="https://cdn.lordicon.com/dxjqoygy.json"
                                    trigger="hover"
                                    colors="primary:#000000,secondary:#ffb200"
                                    style={{ width: '30px', height: '30px' }}>
                                </lord-icon> */}

                                    <i className="fa-solid fa-house-user"></i>
                                    الصفحة الرئيسيه
                                </NavLink>
                            </li>

                            <li className="nav-item list_navpar" >
                                <NavLink to="/allsnai3y">
                                    <i className="fa-solid fa-helmet-safety"></i>
                                    الحرفين
                                </NavLink>
                            </li>

                            <li className="nav-item list_navpar">
                                <NavLink to="/index">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/yyecauzv.json"
                                        trigger="click"
                                        colors="primary:#fff,secondary:#ffb200"
                                        style={{ width: '30px', height: '30px' }}>
                                    </lord-icon>
                                    سياسة الأستخدام
                                </NavLink>
                            </li>
                            <li className="nav-item list_navpar ">
                                
                            </li>


                        </ul>
                        <div className='d-flex align-items-center justify-content-md-center justify-content-sm-center'>



                            {token && <div>
                                {/* Chat  */}

                                <lord-icon
                                    src="https://cdn.lordicon.com/psnhyobz.json"
                                    trigger="click"
                                    colors="primary:#ffb200"
                                    style={{ width: '40px', height: '35px', marginLeft: '20px' }}
                                >

                                    <span className='badge badge-danger bg-danger d-flex justify-content-center align-items-center ' style={{ width: '10px', height: '10px', fontSize: '1px' }}></span>

                                </lord-icon>


                                {/* Notefications */}


                                <NavLink to='/chat'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/hpivxauj.json"
                                        trigger="click"
                                        colors="primary:#ffb200"
                                        style={{ width: '40px', height: '35px', marginLeft: '20px' }}>
                                        <span className='badge badge-danger bg-danger d-flex justify-content-center align-items-center ' style={{ width: '10px', height: '10px', fontSize: '1px' }}></span>
                                    </lord-icon>
                                </NavLink>
                            </div>}

                            {/* image User  */}
                            {token && <div>
                                <div className=' position-relative toggle' data-bs-toggle="collapse" data-bs-target="#userToogel" aria-controls="userToogel" aria-expanded="false" aria-label="Toggle navigation">
                                    <img src={dataUser.img} style={{ width: '30px', height: '30px', borderRadius: "50%" ,cursor:"pointer"}}></img>
                                </div>
                                <div id='userToogel' className='collapse  user_toogel'>
                                    <div>

                                        <div className='user_content_navpar'>
                                            <div className='user_img_name'>
                                                <NavLink to={role == "sanai3y"? "/profileS":"/profileC"} className='user_img_name'>
                                                    <img src={dataUser.img} style={{ width: '70px', height: '70px', borderRadius: "50%" }}></img>
                                                    <h4>{`${dataUser.firstName} ${dataUser.lastName}`}</h4>
                                                </NavLink>
                                            </div>
                                            <div>
                                                <button className="btn_user" onClick={logout}>
                                                    <i className="fa-solid fa-right-from-bracket"></i>
                                                    <p>تسجيل الخروج</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}



                            <div className='d-flex justify-content-md-center justify-content-sm-center mb-md-3 mb-sm-3 m-lg-0'>
                                {!token && <div className='text-light  mx-2 login_reg_button'>
                                    <a className='d-flex align-items-baseline '>
                                        <NavLink to='/login' className='d-flex align-items-baseline'>
                                            <i className="login_content icon fa-solid fa-user"></i>
                                            <p className='p-0 m-0'>تسجيل الدخول</p>
                                        </NavLink>
                                    </a>
                                </div>}
                                {!token && <div className='text-light d-flex align-items-baseline mx-2 login_reg_button'>

                                    <a className=''>
                                        <NavLink to='/regiser' className='d-flex align-items-baseline'>
                                            <i className="login_content icon fa-solid fa-user-plus"></i>
                                            <p className='p-0 m-0'>حساب جديد</p>
                                        </NavLink>
                                    </a>
                                </div>}
                            </div>

                        </div>

                    </div>
                </div>
            </nav>

        </div>
    )

}

export default Navpar