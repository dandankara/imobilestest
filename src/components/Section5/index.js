import React from 'react'

import TableSection5 from '../../assets/TableSection5.svg';

import './style.css'

export default function Section5() {
  return (
    <section className='ContainerSection5'>
      <div className='ContentSection5'>
        <h1>A framework built for the long term</h1>
        <p className='TextSection5'>
          Childcare is for the long term. And you
          need a framework you can count on that gives
          your share long term viability and success. That’s
          why we’ve defined Hapu around our three tribal principles;
          clearly defined process, transparency over money and equality of
          participation.
        </p>
        <a href='#'>Read how Hapu's tribal background defines our app</a>
      </div>
        <img src={TableSection5} alt='table' />
    </section>
  )
}
