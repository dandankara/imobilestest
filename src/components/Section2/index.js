import React from 'react';

import ImageSection2 from '../../assets/ImageSection2.svg';

import './style.css';

export default function Section2() {
  return (
    <>
      <section className='ContainerSection2'>
        <div className='ContentSection2'>
          <h1>Share your home, nanny and costs</h1>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be,
            well, fantastic?! If only it was easy to connect with other parents to share your costs?
            Well now it is, with Hapu. Hapu means tribe and it’s our foundational 3 tribal principles
            that empowers you to create and manage your own tribe. A tribe that together has the power to
            create new affordable solutions in
            childcare that work for you and your community.
          </p>
          <a className='LinkSection2' href='#'> Ready to get started?</a>
        </div>
        <img className='ImageSection2' src={ImageSection2} alt='ImageSection2' />
      </section>
    </>
  )
}
