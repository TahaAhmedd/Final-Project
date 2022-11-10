/* eslint-disable no-unused-vars */
import './navpar.css'
import logo from '../../images/landing/logo.png'
import user from '../../images/landing/user.png'
import { useNavigate, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Snai3ycontext } from '../ProfileSnai3y/context'
import { useDispatch, useSelector } from 'react-redux'
import { getDataClient } from '../../Redux/Slices/ClientReducer'
import { getSnai3y, logOutSnai3y } from '../../Redux/Slices/Snai3yReducer'
function Navpar({socket}) {

    // The badge
    const [badge, setBadge] = useState(false)

    // The current User
    const currentUser = useSelector((state) => state.userReducer.userData);
    console.log(currentUser._id, currentUser.rule)


    // The socket events
    useEffect(() => {
        socket?.emit("groupUserRule", {currentUserId: currentUser?._id, currentUserRule: currentUser?.rule})
        socket?.on("getRule", ((msg) => {
            console.log(msg)
        }))

        socket?.on("getJob", (jobId) => {
            console.log(jobId)
        })

    }, [currentUser, socket])


    // console.log(socket)
 /////////////////////////////////////////////////////
    // const {data, setData} = useState(Snai3ycontext)
    const role = localStorage.getItem("snai3yRole");
    // let [dataUser,setDataUser] = useState() ;//Snai3y Data
    let snai3yData = useSelector(state => state.Snai3yReducer.data);
    let clientData = useSelector(state => state.ClientReducer.clintdata)

    let dataUser;

    if (role == "sanai3y") {
        dataUser = snai3yData
        // console.log(dataUser)
    }
    else if (role == "client") {
        dataUser = clientData
        // console.log(dataUser)
    }
    else dataUser = ""

    // console.log(data)


    let token = localStorage.getItem("token")
    const navigate = useNavigate()
    const imageUser = localStorage.getItem("image");
    const userName = localStorage.getItem("Name");
    let dispatch = useDispatch()

    function logout() {

        localStorage.clear()
        navigate("/login");
    }
    return (
        <div lang='ltr' >
            <nav className="navbar navbar_project navbar-expand-lg navbar-dark p-0">
                <div className='container'>

                    <NavLink to='/' className="navbar-brand" style={{ width: "80px" }}>

                        <img src={logo} className="brand" style={{ width: "100%" }} alt= "imag"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item active list_navpar">
                                <NavLink to="/home">
                                    <lord-icon
                                    src="https://cdn.lordicon.com/dxjqoygy.json"
                                    trigger="hover"
                                    colors="primary:#000000,secondary:#ffb200"
                                    style={{ width: '30px', height: '30px' }}>
                                </lord-icon>

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
                                <NavLink to="/terms">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/yyecauzv.json"
                                        trigger="click"
                                        colors="primary:#fff,secondary:#ffb200"
                                        style={{ width: '30px', height: '30px' }}>
                                    </lord-icon>
                                    سياسة الأستخدام
                                </NavLink>
                            </li>
                            {token && <li className="icon_nav_mesage nav-item list_navpar text-white">
                                <NavLink to="">

                                    <lord-icon
                                        src="https://cdn.lordicon.com/psnhyobz.json"
                                        trigger="click"
                                        colors="primary:#ffb200"
                                        style={{ width: '30px', height: '30px' }}
                                    >

                                        {badge && (<span className='badge badge-danger bg-danger d-flex justify-content-center align-items-center ' style={{ width: '10px', height: '10px', fontSize: '1px' }}></span>)}
                                    </lord-icon>
                                    الاشعارات
                                </NavLink>
                            </li>}
                            {token && <li className="icon_nav_mesage nav-item list_navpar text-white">
                                <NavLink to='/chat'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/hpivxauj.json"
                                        trigger="click"
                                        colors="primary:#ffb200"
                                        style={{ width: '30px', height: '30px' }}>
                                        <span className='badge badge-danger bg-danger d-flex justify-content-center align-items-center ' style={{ width: '10px', height: '10px', fontSize: '1px' }}></span>
                                    </lord-icon>
                                    الرسائل
                                </NavLink>
                            </li>}
                            {token &&<li className='icon_nav_mesage nav-item '>
                                <NavLink to={role == "sanai3y" ? "/profileS" : "/profileC"} className=''>
                                    <div style={{ width: '30px', height: '30px',display:"flex"}} className="">
                                        <img src={dataUser.img} style={{ width: '100%', height: '100%', borderRadius: "50%" }} />
                                        <span style={{marginRight:"5px",color:"white"}}>
                                        {dataUser.firstName + dataUser.lastName}
                                        </span>
                                    </div>
                                    {/* <h4 style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", width: "13ch", direction: "ltr", textAlign: "center" }}>{`${dataUser.firstName} ${dataUser.lastName}`}</h4> */}
                                </NavLink>
                            </li>}
                            {token && <li onClick={logout} style={{cursor:"pointer"}} className='list_navpar icon_nav_mesage nav-item list_navpar text-white'>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                تسجيل الخروج
                            </li>}
                            {!token && <li className='icon_nav_mesage nav-item list_navpar text-white'>
                                <NavLink to='/login' className='d-flex align-items-baseline'>
                                    <i className="login_content icon fa-solid fa-user"></i>
                                    تسجيل الدخول
                                </NavLink>
                            </li>}
                            {!token && <li className='icon_nav_mesage nav-item list_navpar text-white'>
                                <NavLink to='/regiser' className='d-flex align-items-baseline'>
                                    <i className="login_content icon fa-solid fa-user-plus"></i>
                                    حساب جديد
                                </NavLink>
                            </li>}
                        </ul>
                        <div className='chat_notif d-flex align-items-center justify-content-md-center justify-content-sm-center'>



                            {token && <div className='login_reg_nav'>

                                {/* Notefications */}
                                <lord-icon
                                    src="https://cdn.lordicon.com/psnhyobz.json"
                                    trigger="click"
                                    colors="primary:#ffb200"
                                    style={{ width: '40px', height: '35px', marginLeft: '20px' }}
                                >

                                    <span className='badge badge-danger bg-danger d-flex justify-content-center align-items-center ' style={{ width: '10px', height: '10px', fontSize: '1px' }}></span>

                                </lord-icon>


                                {/* Chat  */}


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
                            {token && <div className='login_reg_nav'>
                                <div className=' position-relative toggle' data-bs-toggle="collapse" data-bs-target="#userToogel" aria-controls="userToogel" aria-expanded="false" aria-label="Toggle navigation">
                                    <img src={dataUser.img} style={{ width: '30px', height: '30px', borderRadius: "50%", cursor: "pointer" }}></img>
                                </div>
                                <div id='userToogel' className='collapse  user_toogel'>
                                    <div>

                                        <div className='user_content_navpar'>
                                            <div className='user_img_name'>
                                                <NavLink to={role == "sanai3y" ? "/profileS" : "/profileC"} className='user_img_name'>
                                                    <div style={{ width: '130px', height: '130px', marginBottom: "15px" }}>
                                                        <img src={dataUser.img} style={{ width: '100%', height: '100%', borderRadius: "50%" }} />
                                                    </div>
                                                    <h4 style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", width: "13ch", direction: "ltr", textAlign: "center" }}>{`${dataUser.firstName} ${dataUser.lastName}`}</h4>
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



                            <div className=' d-flex justify-content-md-center justify-content-sm-center mb-md-3 mb-sm-3 m-lg-0'>
                                {!token && <div className='login_reg_nav text-light  mx-2 login_reg_button'>
                                    <a className='d-flex align-items-baseline '>
                                        <NavLink to='/login' className='d-flex align-items-baseline'>
                                            <i className="login_content icon fa-solid fa-user"></i>
                                            <p className='p-0 m-0'>تسجيل الدخول</p>
                                        </NavLink>
                                    </a>
                                </div>}
                                {!token && <div className=' text-light d-flex align-items-baseline mx-2 login_reg_button'>

                                    <a className='login_reg_nav'>
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