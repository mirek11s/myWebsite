import React from 'react'
import TitleHeader from './TitleHeader'
import { Button } from 'primereact/button'

const MainScreen = () => {
  return (
    <>
      <div className="my-8">
        <TitleHeader title="Hello World" />
      </div>
      <div className="h-96 flex items-center justify-center">
        <Button label="Check" icon="pi pi-check" />
        <Button label="Check" icon="pi pi-check" />
      </div>
    </>
  )
}

export default MainScreen
