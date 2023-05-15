import React from 'react'
import Image6 from './images/ab1.jpg';
import Image7 from './images/ab2.jpg';
import Image8 from './images/ab3.jpg';

const About = () => {
  return (
    <div className='container my-5'>
     <div className="row featurette d-fles justify-content-center align-items-center">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">It all started hith Icoders idea. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder co ntent for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5">
        <img src={Image6} className="img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400"></img>
       
      </div>
    </div>

    <div className="row featurette d-fles justify-content-center align-items-center">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">We started Icoder in 1877. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5 order-md1">
      <img src={Image7} className=" img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400"></img>
       
      </div>
    </div>


    <div className="row featurette d-fles justify-content-center align-items-center">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5">
      <img src={Image8} className=" img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400"></img>
       
      </div>
    </div>

  <hr/>
    <footer class="container my-4">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>© 2022–2023 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  </footer>

    </div>
  )
}

export default About
