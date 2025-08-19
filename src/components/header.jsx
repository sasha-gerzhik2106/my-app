import { useEffect, useState } from 'react'
import logo from '/vite.svg'

export default function Header(){
    const [now, setNow] = useState (new Date())
    useEffect(() => {
      const timer = setInterval(() => setNow(new Date()), 1000)
      return () => clearInterval(timer)
    }, [])
  return(
 <header>
    <img src={logo} alt="Vite" />
    {/* <h3>My react</h3> */}
    <span> Время сейчас: {now.toLocaleTimeString()}</span>
  </header>
  )
}