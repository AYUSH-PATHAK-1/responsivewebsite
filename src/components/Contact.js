import React from 'react'

const contact = () => {
  return (
    <>
    <h1 className="text-center text-info">Contact Us</h1>
    <div className="container">
    <form>
  <div class="form-group mb-3">
    <label className="form-label" >Name</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter Your Name"/>    
  </div>
  <div class="form-group mb-3">
    <label className="form-label" >Mobile Number</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Mobile Number"/>    
  </div> 
  <div class="mb-3">
    <label className="form-label">Your Query</label>
    <textarea className="form-control" id="" cols="30" rows="3"></textarea>    
  </div> 
  <button type="submit" class="btn btn-primary mb-3">Submit Feedback</button>
</form>
    </div>
    </>
  )
}

export default contact