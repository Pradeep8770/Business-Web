import React from 'react'
import Common from './Common';
import web2 from "./image-2.svg"

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web2}
        visit="/contact"
        btnname="Contact Now" />

    </>
  )
}

export default About;