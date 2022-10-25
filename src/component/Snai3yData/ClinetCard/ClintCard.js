import React from 'react'
import './ClintCard.css'
function ClintCard({ data }) {
    console.log(data)
    return (
        <>
            <div className='parent_card'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <img src={data.img} alt="snai3y photo" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div className='col-lg-9 col-md-6 col-sm-12 snai3y_content'>

                        {/* Name  */}
                        <h2>
                            <i className=
                            // Snai3y Status
                            {`fa-solid fa-o ${data.status == "free"? "snai3y_status": "" }`} 
                            
                            style={{fontSize:"20px"}}></i>
                            {`${data.firstName} ${data.lastName}`}
                        </h2>

                        <small>
                            
                        </small>
                        {/* Date  */}
                        <small>
                        <i className="fa-solid fa-clock" style={{fontSize:"18px"}}></i>
                            {data.joinedDate}
                        </small>

                        {/* address */}
                        <p style={{marginTop:"10px"}}>

                            <lord-icon
                                src="https://cdn.lordicon.com/zzcjjxew.json"
                                trigger="hover"
                                colors="primary:#ffb200,secondary:#000000"
                                style={{ width: '30px', height: '30px' }}>
                            </lord-icon>
                            {data.address}
                        </p>

                        {/* gender  */}
                        <small className='snai3y_gender'>{data.gender}</small>
                        <hr/>
                        {/* Skills */}
                        <div className='row'>
                            <div className=' col-12'>
                                <p className='snai3y_skills'>
                                    {data.skills}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClintCard