import React from 'react'

import LogoBaby from '../../assets/LogoBaby.svg';

import './style.css'

export default function Section6() {
  return (
    <section className='ContainerSection6'>
      <img src={LogoBaby} alt='logoBabby' />
      <div className='ContentSection6'>
        <h1>Comming soon: Nanny Share Daily Diary</h1>
        <p>
        With the Hapu daily diary your nanny will be able to update you and your 
        sharers with photos and commentary of the day. You and sharers will receive 
        notifications and you’ll be able to 
        login to view the daily adventures fo your little ones. We can’t wait!
        </p>
      </div>
    </section>
  )
}
