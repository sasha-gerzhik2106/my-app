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
      title={data[1].title}
      description={data[1].description}
    />
     <WayToEach 
      title={data[2].title}
      description={data[2].description}
    />
     <WayToEach 
      title={data[3].title}
      description={data[3].description}
    />
  </main>
    
  </div>
  )
  
}


export default App
