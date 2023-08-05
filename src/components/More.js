import React from 'react'
import Card from './Card'
import data from './Apidata'

const more = () => {
  return (
    <>
    <h1 className="text-center text-info">More About Us</h1>
    <div className="container">
  <div className="row">
    {data.map((values)=>{
      return(
        <>
        <Card title={values.title} image={values.images}/> 

        </>
      )
    })}
       
  </div>
</div>
    
    </>
  )
}

export default more