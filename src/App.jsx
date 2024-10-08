import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import FeaturedProduct from './components/FeaturedProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<FeaturedProduct/>
    </>
  )
}

export default App
