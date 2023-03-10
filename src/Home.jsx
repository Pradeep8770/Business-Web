import React from 'react'
import web from "../src/image-1.svg"

function Home() {
  return (
   <>
   <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid nav-bg '>
      <div className='row align-itme'>
        <div className='col-10 mx-auto'>
       <div className='row'>
        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
          <h1>
            Grow your business with  <br />
            <strong className='brand-name'>Developer Pradeep </strong>
          </h1>
          <h2 className='mt-3'>
            we are the team of talented Developer,alomg websites
          </h2>
          <div className='mt-3'>
            <a href='' className='btn-get-started'>
              Get Started
            </a>
          </div>
        </div>

        <div className='col-lg-6 order-1 order-lg-2 header-img'>
          <img src={web} alt="" className='img-fluid animated' />
        </div>
        

        </div>
        </div>
      </div>

    </div>

   </section>
   </>
  )
}

export default Home;