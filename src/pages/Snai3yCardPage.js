import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import ClintCard from '../component/Snai3yData/ClinetCard/ClintCard'
import Snai3ySidepar from '../component/Snai3yData/Snai3ySidepar/Snai3ySidepar'

function Snai3yCardPage() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:7000/sanai3y/all").then(
      (res) => {
        console.log(res)
        setData(res.data.Data)
      })
  }, [])
  return (


    <div className='container marginTop'>
      <div className='row'>
        {/* Sidepar */}
        <div className='col-4 ' >
          <Snai3ySidepar />
        </div>

        {/* Snai3y Card */}
        <div className='col-8'>
          {data.map((item, index) =>
            <ClintCard data={item} />

          )}
        </div>

      </div>
    </div>

  )
}

export default Snai3yCardPage