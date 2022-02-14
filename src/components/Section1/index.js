import React from 'react';

import ImageHeader from '../../assets/ImageHeader.svg';
import PlayButton from '../../assets/Playbutton.svg';
import LogoSmile from '../../assets/LogoSmile.svg';

import './style.css'
import MiniSection from '../MiniSection';


export default function Section1() {
  return (
    <section>
      <div className='ContainerHeader'>
        <nav className='NavBarMenu'>
          <img className='LogoSmile' src={LogoSmile} alt='LogoSmile' />

          <a href='$'>Create Your Nanny Share</a>
          <a href='*'>Browser Share</a>
          <a href='@'>Our Story</a>

          <div className='DivButtonsHeader'>
            <button className='ButtonBecome'>Become a Nanny Share</button>
            <button className='SignInButton'>Sign In</button>
          </div>
        </nav>

        <div className='ContainerSection'>
          <section className='SectionContent'>
            <h1>Create the childcare you need at a price you can afford</h1>
            <p>Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
            
            <a href='alt'>
              <img 
                className='PlayButton'
                src={PlayButton}
                alt='PlayButton'  
              />
              See hapu in action (27seconds)
            </a>
          </section>

          <img className='ImageHeader' src={ImageHeader} alt='ImageHeader' />
        </div>
      </div>

      <MiniSection />
    </section>
  )
}
