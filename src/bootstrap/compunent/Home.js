import React from 'react'

import Image from './images/p3.jpg';
import Image2 from './images/p4.jpg';
import Image3 from './images/p5.jpg';

import Image4 from './images/p6.jpg';
import Image5 from './images/p7.jpg';


const Home = () => {
  return (
    <div>
           <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Image} className=" d-block w-100" alt="..." height='380px'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome to Iconder</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <button className='btn btn-primary'>Technology</button>
        <button className='btn btn-danger m-3'>Web Devlopment</button>
        <button className='btn btn-primary'>Tech Fun</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image2} className=" d-block w-100" alt="..." height='380px'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
        <button className='btn btn-primary'>Technology</button>
        <button className='btn btn-danger m-3'>Web Devlopment</button>
        <button className='btn btn-primary'>Tech Fun</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image3} className=" d-block w-100" alt="..." height='380px'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
        <button className='btn btn-primary'>Technology</button>
        <button className='btn btn-danger m-3'>Web Devlopment</button>
        <button className='btn btn-primary'>Tech Fun</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


{/* card parts  */}


<div className='container'>
      <div className="row mb-2 mt-3">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-danger">World</strong>
          <h3 className="mb-0">Learn pythen</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
         <img className="bd-placeholder-img" width="200" height="250" src={Image4}></img>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Design</strong>
          <h3 className="mb-0">Learn Designing</h3>
          <div className="mb-1 text-body-secondary">Nov 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-img" width="200" height="250" src={Image5}></img>
        </div>
      </div>
    </div>
  </div>

  {/* selcond cards */}

  <div className="row mb-2 mt-3">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h3 className="mb-0">Global Conferences</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
         <img className="bd-placeholder-img" width="200" height="250" src={Image4}></img>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Design</strong>
          <h3 className="mb-0">Bootstrap Templates</h3>
          <div className="mb-1 text-body-secondary">Nov 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-img" width="200" height="250" src={Image5}></img>
        </div>
      </div>
    </div>
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

export default Home
