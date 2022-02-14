import React from 'react';

import './style.css';

import Calendar from '../../assets/Calendar.svg';
import LogoFooter from '../../assets/LogoFooter.svg';
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'
import Instagram from '../../assets/Instagram.svg'

export default function Footer() {
  return (
    <section className='ContainerFooter'>
      <div className='FooterContent'>
        <h1>Become a nanny share host</h1>
        <p>Takes less than 5 minutes to get started</p>

        <button>
          <img src={Calendar} alt='Calendar' />
          <div className='ButtonDiv'>
            <p>Create your Nanny Share</p>
            <span>Takes less than 5 minutes</span>
          </div>
        </button>

        <a className='FirstLink' href='link'>Or browse local nanny shares</a>

        <div className='FooterLinks'>
          <div className='LogoFooter'>
            <img src={LogoFooter} alt='LogoFooter' />
          </div>

          <section className='Links'>
            <a href='Share'>Share Your Nanny</a>
            <a href='Story'>Our Story</a>
            <a href='Blog'>Blog</a>
            <a href='Terms & Privacy'>Terms & Privacy</a>
          </section>

          <div className='SocialMedias'>
            <img src={Facebook} alt='Face' />
            <img src={Twitter} alt='Face' />
            <img src={Instagram} alt='Face' />
          </div>

        </div>

        <footer className='Copy'>
          Copyright © 2017 Hapu PTY Limited All rights reserved
        </footer>
      </div>
    </section>
  )
}
