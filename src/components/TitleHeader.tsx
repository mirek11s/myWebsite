import React from 'react'

interface TitleHeaderProps {
  title: string
}

const TitleHeader = ({ title }: TitleHeaderProps) => {
  return <h1 className="text-center">{title}</h1>
}

export default TitleHeader
