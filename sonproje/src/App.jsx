import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [Count, setCount]= useState(0)
  const [user, setUser] = useState(null)

  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='col-sm-12'>
         <SiteRoutes />

        </div>

      </div>
      
    
    </>
  )
}

export default App
