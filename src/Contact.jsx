import React, { useState } from 'react'

function Contact() {
  const [data,setdata]=useState(
    {
      fullname:"",
      Phone:"",
      Email:"",
      Message:""
    }
  )

  const InputEvent=(event)=>{
   const {name,value}=event.target

   setdata((prevalue)=>{
    return{
      ...prevalue,
      [name]: value,
    }
   })
  }

  const SubmitEvent=(e)=>{
    e.preventDefault();

    alert(
      "Your form is submitted"
    )

  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className='container constact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={SubmitEvent}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Fullname</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" 
                name='fullname'
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Fullname" />
                
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" 
                name='Phone'
                value={data.Phone}
                onChange={InputEvent}
                placeholder="Mobile Number" />
                
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" 
                name='Email'
                value={data.Email}
                onChange={InputEvent}
                placeholder="name@example.com" />
                
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                name='Message'
                value={data.Message}
                onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;