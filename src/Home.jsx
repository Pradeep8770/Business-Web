import React from 'react'
import web from "../src/image-1.svg"
import Common from './Common';

function Home() {
  return (
    <>
      <Common name="Grow your business with" imgsrc={web} visit="/service" btnname="Get Started" />
    </>
  )
}

export default Home;