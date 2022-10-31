import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import ClintCard from '../component/Snai3yData/ClinetCard/ClintCard'
import Snai3ySidepar from '../component/Snai3yData/Snai3ySidepar/Snai3ySidepar'

function Snai3yCardPage() {
  const [data, setData] = useState([])
  const [newdata, setNewdata] = useState([])
  const [flagfilter , setFlagfilter] =useState(false)
  useEffect(() => {
    axios.get("http://localhost:7000/sanai3y/all").then(
      (res) => {
        console.log(res)
        setData([...res.data.Data])
        setNewdata([...res.data.Data])
      })
  }, [])

  function fliterSkills(type){
    let arr = newdata.filter((item)=>item.skills == type );
    setData([...arr])
    setFlagfilter(true)
  }

  function fliterAddressSnai3y(add){
    console.log(add)

    if(flagfilter){
      let arr = newdata.filter((item)=>item.address == add );
      setData([...arr])
    }
    else{
      let arr = newdata.filter((item)=>item.address == add );
      setData([...arr])
    }
  }
  return (


    <div className='container marginTop'>
      <div className='row' style={{position:"relative"}}>
        {/* Sidepar */}
        <div className='col-4 ' >
          <Snai3ySidepar filter1={fliterSkills} filter2={fliterAddressSnai3y}
            style={{position:"fixed" ,right:"0" }}
          />
        </div>

        {/* Snai3y Card */}
        <div className='col-8' >
          {data.map((item, index) =>
            <ClintCard datas={item} key={index}/>

          )}
        </div>

      </div>
    </div>

  )
}

export default Snai3yCardPage