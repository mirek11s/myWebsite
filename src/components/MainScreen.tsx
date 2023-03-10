import React from 'react'
import TitleHeader from './TitleHeader'
import ParticlesRenderer from './ParticlesRenderer'
// import IMAGE from '../main_img.jpg'
// import IMAGE2 from '../Capture22.png'

const MainScreen = () => {
  return (
    <div className="grid grid-cols-1">
      <ParticlesRenderer />
      <div className="col-span-1">
        <TitleHeader title="Hello World" />
      </div>
      {/* <img src={IMAGE2} alt="Image22" className="object-contain w-full" /> */}
    </div>
  )
}

export default MainScreen
