import React,{useState} from 'react'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import {homeObjOne ,homeObjTwo, homeObjThree} from './InfoSection/Data'
import "bootstrap/dist/css/bootstrap.css";
import Services from './Services'
import Footer from './Footer'
import HelpYou from './HelpYou'
import Drives from './Driver\'s'
import EasyTracking from './EasyTracking'

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
        <HelpYou/>
        <Drives/>
        <EasyTracking/>
        <Services/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Footer/>
        {children}
        </div>
  )
}

export default Layout