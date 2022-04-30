import React,{useState} from 'react'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({children}) => {

  const [isOpen,setOpen] =useState(false)

  const toggle =()=>{
    setOpen(!isOpen)
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection/>
        {children}
        </div>
  )
}

export default Layout