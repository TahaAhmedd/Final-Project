import React from 'react'
import "./Notfind.css"
function Notfind() {
  return (
    <div className='notfind'>
        <p>لا يوجد طلبات مقدمة حاليا</p>
        <img src={require('../../images/notfind/search.jpg')}/>
    </div>
  )
}

export default Notfind