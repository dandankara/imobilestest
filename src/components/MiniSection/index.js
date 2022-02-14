import React from 'react'

import Avatar from '../../assets/Avatar.svg';

import './style.css'

export default function MiniSection() {
  return (
    <section>
        <div className='ContainerMiniSection'>
            <img src={Avatar} alt='profileAvatar' />
            <a href='#'>Sarah’s day care available now in North Sydney</a>
            <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
        </div>
    </section>

  )
}
