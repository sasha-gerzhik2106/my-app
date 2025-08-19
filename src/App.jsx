import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import WayToEach from './components/each'
import './App.css'
import {data} from './data'


function App() {
  return(
<div>
 <Header />
  <main>
    <h3>Меню</h3>
    <WayToEach 
      title={data[0].title}
      description={data[0].description}
    />
     <WayToEach 
      {...data[1]}
    />
    <WayToEach 
      {...data[2]}
    />
    <WayToEach 
      {...data[3]}
    />
    <WayToEach 
      {...data[4]}
    />
  </main>
    
  </div>
  )
  
}


export default App
