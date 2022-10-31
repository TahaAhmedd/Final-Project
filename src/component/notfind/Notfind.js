import React from 'react'
import "./Notfind.css"
function Notfind() {
  return (
    <div className='notfind'>
        <img src={require('../../images/notfind/search.png')}/>
        <p>لا يوجد طلبات مقدمة حاليا</p>
    </div>
  )
}

export default Notfind