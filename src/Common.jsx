import React from 'react'
import { NavLink } from 'react-router-dom';

function Common(props) {
  return (
    <>
   <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid nav-bg '>
      <div className='row align-itme'>
        <div className='col-10 mx-auto'>
       <div className='row'>
        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
          <h1>
            {props.name} <br />
            <strong className='brand-name'>Developer Pradeep </strong>
          </h1>
          <h2 className='mt-3'>
            we are the team of talented Developer,alomg websites
          </h2>
          <div className='mt-3'>
            <NavLink to={props.visit} className='btn-get-started'>
              {props.btnname}
            </NavLink>
          </div>
        </div>

        <div className='col-lg-6 order-1 order-lg-2 header-img'>
          <img src={props.imgsrc} alt="" className='img-fluid animated' />
        </div>
        

        </div>
        </div>
      </div>

    </div>

   </section>
   </>
    
  )
}

export default Common;