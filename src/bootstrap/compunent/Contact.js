import React from 'react'

const Contact = () => {
  return (
    <div>
          <div className='container my-5'>



          <form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1"> select your Query</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Web</option>
      <option>Tech Stack</option>
      <option>Technology</option>
      <option>Others</option>
       
    </select>
  </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1">Leaborat your Concern</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>


  <div className="form-group row">
    <div className="col-sm-2">are you a member</div>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
         yes
        </label>
     
      </div>
    </div>
  </div>


  <div className="form-group row">
    <div className="col-sm-2">are you a Professor</div>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
         yes
        </label>
     
      </div>
    </div>
  </div>


  <div className="form-group row">
    <div className="col-sm-2">are you a Coder</div>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
         yes
        </label>
       
      </div>
      

      
    </div>
  </div>



  <button className='btn btn-primary my-2'>Save</button>

</form>


  <hr/>
    <footer className="container my-4">
    <p className="float-end"><a href="#">Back to top</a></p>
    <p>© 2022–2023 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  </footer>

    </div>
    </div>
  )
}

export default Contact
