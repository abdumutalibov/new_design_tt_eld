import React from 'react'
import { HeroBg, HeroContainer, ImgBg } from './HeroElements'
import { imges } from '../../public/Background.svg'
import bac from '../../public/Background.png'

function HeroSection() {
  return (
    <HeroContainer>
       <HeroBg>
           <ImgBg ref={bac} />
           <img src={bac}/>
       </HeroBg>
        </HeroContainer>
  )
}

export default HeroSection