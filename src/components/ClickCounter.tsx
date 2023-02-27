import { useState } from 'react'

type ClickCounterProps = {
  name: string
}

export const ClickCounter = (props: ClickCounterProps) => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me {props?.name}</button>
      <p>Clicked {count} times</p>
    </div>
  )
}
