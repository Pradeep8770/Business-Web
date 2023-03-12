import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "./image-1.svg"
function Service() {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                  <img src={''} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <NavLink href="#" class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;