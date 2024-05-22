import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount(count + 1)
  }

  return(
    <>
      <button onClick={handleButtonClick}>
        Increment
      </button>
      <div>Count: {count}</div>
    </>
  )
}
