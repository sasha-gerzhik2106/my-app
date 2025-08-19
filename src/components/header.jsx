import logo from '/vite.svg'

export default function Header(){
    const now = new Date()
  return(
 <header>
    <img src={logo} alt="Vite" />
    {/* <h3>My react</h3> */}
    <span> Время сейчас: {now.toLocaleTimeString()}</span>
  </header>
  )
}