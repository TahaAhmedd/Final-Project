import React from 'react'
import './ClintCard.css'
import clintPhoto from '../../images/home/abdelhafez.jpg'
function ClintCard({ data }) {
    return (
        <>
            <div className='parent_card'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={data.img} alt="snai3y photo" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div className='col-9 snai3y_content'>
                        <h2>
                            <lord-icon
                                src="https://cdn.lordicon.com/dxjqoygy.json"
                                trigger="hover"
                                colors="primary:#000000,secondary:#ffb200"
                                style={{ width: '30px', height: '30px' }}>
                            </lord-icon>
                            {`${data.firstName} ${data.lastName}`}
                        </h2>
                        <small>
                        <i className="fa-solid fa-clock" style={{fontSize:"18px"}}></i>
                            {data.joinedDate}
                        </small>
                        <p style={{marginTop:"10px"}}>

                            <lord-icon
                                src="https://cdn.lordicon.com/zzcjjxew.json"
                                trigger="hover"
                                colors="primary:#ffb200,secondary:#000000"
                                style={{ width: '30px', height: '30px' }}>
                            </lord-icon>
                            {data.address}
                        </p>
                        <small>{data.gender}</small>
                        <hr/>
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