import React from 'react'
import TitleHeader from './TitleHeader'
import PathButtons from './PathButtons'
import IMAGE from '../main_img.jpg'

const MainScreen = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1 my-8">
        <TitleHeader title="Hello World" />
      </div>
      <div className="col-span-1">
        <PathButtons />
      </div>
      <div className="col-span-1">
        <img src={IMAGE} alt="Image22" className="w-full object-contain" />
      </div>
    </div>
  )
}

export default MainScreen
