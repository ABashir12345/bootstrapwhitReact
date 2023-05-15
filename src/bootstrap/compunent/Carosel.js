import React from 'react'
import Image from './images/p3.jpg';
import Image2 from './images/p4.jpg';
import Image3 from './images/p5.jpg';
const Carosel = () => {
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
      <img src={Image} className="d-block w-100" alt="..." height='380px'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome to Iconder</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <button className='btn btn-primary'>Technology</button>
        <button className='btn btn-danger m-3'>Web Devlopment</button>
        <button className='btn btn-primary'>Tech Fun</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image2} className="d-block w-100" alt="..." height='380px'/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
        <button className='btn btn-primary'>Technology</button>
        <button className='btn btn-danger m-3'>Web Devlopment</button>
        <button className='btn btn-primary'>Tech Fun</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image3} className="d-block w-100" alt="..." height='380px'/>
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
    </div>
  )
}

export default Carosel
