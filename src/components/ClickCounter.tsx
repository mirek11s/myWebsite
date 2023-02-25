import { useState } from 'react'

type GreeterProps = {
  name: string
}

export const ClickCounter = (props: GreeterProps) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me {props?.name}</button>
      <p>Clicked {count} times</p>
    </div>
  )
}
