import React from 'react'
import '../App.css';
import Card from './Card';
import data from './Apidata';

const about = () => {
  return (
    <>
    
    <div className="container">
      <div className="row my-4 d-flex align-items-center">  
        <div className="col-xs-12 col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere inventore accusantium odit mollitia ea consequuntur iure nostrum cumque repellendus?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus error amet. Consequatur amet perferendis, laborum possimus mollitia repellat explicabo vel voluptates nihil velit, ipsa, dolores reiciendis obcaecati numquam blanditiis.</p>
        </div>
        <div className="col-xs-12 col-md-6 aboutimg">
          <img src="./images/3.jpg" alt="" />
</div>
      </div>
    </div>

    <h1 className="text-center text-info">Meet Our Team</h1>
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

export default about