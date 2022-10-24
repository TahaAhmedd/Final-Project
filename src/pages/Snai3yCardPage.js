import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import ClintCard from '../component/ClinetCard/ClintCard'

function Snai3yCardPage() {
  const [data, setData]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:7000/sanai3y/all").then(
      (res)=>{
        console.log(res)
        setData(res.data.Data)
      })
  },[])
  return (
    
        
        <div className='container'>
          {data.map((item,index)=>
            <ClintCard data={item} />
          
          )}
        </div>
  
  )
}

export default Snai3yCardPage