import './about.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Lottie from 'lottie-react';
import CCanimation from '../../assets/cclogo.json'

// TEMPORARY
// import Line from '../../assets/Line.png'
// import OwnerImg from '../../assets/OwnerImg.png'
// import { useState } from 'react';
// import Tech from './Tech';

const Type = () => (
  <Typewriter
    options={{
      strings: ['I\'m Wilmar'],
      autoStart: true,
      loop: true,
    }}
  />
)

const About = () => {

  const navigate = useNavigate()


  useEffect(()=> {
    Aos.init({duration: 500})
  }, [])
  return (
    <div className="about">
      <div className="about-container">
        {/* <div className='lineContainer'>
          <img src={ Line } className='line'/>
        </div> */}
        <div className="Firstabout-container">
          <div className="logo-container"> 
            <Lottie animationData={ CCanimation } className='lottie__Logo'/>
          </div>
          <div className="intro-container">
            <div className="text-con-1">
              <div className="text-con-1-1">
                <h2> Hey there!</h2>
                <span> <Type/> </span>
                <h2>also known as Code Counter. I love creating awesome websites!</h2>
              </div>
              <div className="text-con-1-3">
                <h2>Ready to start a project?</h2>
                <h2>Hit me up!</h2>
              </div>
              <button className='hireBtn' onClick={() => navigate('/HireMe')}>Hire Me!</button>
            </div> 
          </div>
        </div>
        {/* <div className="Secondabout-Container" id='about'>
          <div className="techOwner__Container" data-aos={screenWidth <= 768 ? 'fade-up' : 'fade-up-left'}>
            <div className="owner__Img" >
              <img src= { OwnerImg }/>
              <h1>-me</h1>
            </div>
            <div className="tech__Con" >
              <h1>In the realm of web development, I excel in:</h1>
              <div className="tech__Stack">
                <Tech/>
              </div>
            </div>
          </div>
          <div className="des__Container" data-aos={screenWidth <= 768 ? 'fade-up' : 'fade-up-right'}>
            <div className="first__des">
              <p>Hello! I&apos;m <span>Wilmar</span>, AKA Code Counter. Building websites is my passion. I love creating unique and captivating digital experiences. From design to code, I turn visions into stunning, user-friendly websites.</p>
            </div>
            <div className="second__des">
              <p>As an <span>accountancy student</span> accountancy student who&apos;s passionate about programming, &quot;Code Counter&quot; reflects my love for precision in both numbers and code. Just as an accountant meticulously counts and organizes, I do the same with every line of code.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    
  )
}

export default About