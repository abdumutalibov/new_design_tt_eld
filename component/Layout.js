import React,{useState} from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
// import "bootstrap/dist/css/bootstrap.css";
import Services from './Services'
import Footer from './Footer'
import HelpYou from './HelpYou'
import Drives from './Driver\'s'
import EasyTracking from './EasyTracking'
import Rating from './Rating'
import Frequntly from './Frequently'
import Friends from './Friends'
import Footer2 from './Footer2'
import Background from './Background/Background'
const Layout = ({children}) => {

  const [isOpen,setOpen] =useState(false)

  const toggle =()=>{
    setOpen(!isOpen)
  }

  // const backStateClickHandler = () => {
  //   setMenuState(false)
  // }
  return (
    <div>
      
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
       {isOpen ? <Background click={toggle}/>  : ''}
        <HeroSection/>
        <HelpYou/>
        <Drives/>
        <EasyTracking/>
        <Services/>
        <Rating/>
        <Frequntly/>
        <Friends/>
        <Footer/>
         <Footer2/>
        {children}
        </div>
  )
}

export default Layout