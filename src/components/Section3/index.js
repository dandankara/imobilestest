import { Form } from '@unform/web';
import React, { useCallback, useState } from 'react'

import api from '../../services/api'

import './style.css';

export default function Section3() {
  const [message, setMessage] = useState()

  let yup = require('yup');

  let SubmitMessage = useCallback(async value => {
    try {
      let { name, email } = value;

      let schema = yup.object().shape({
        email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
        name: yup.string().required('Nome é obrigatório'),
      });

      await schema.validate({ name, email }, { abortEarly: true });
      await api.post('challenge/newsletter/', {
        name, email
      });
      setMessage('Registrado com sucesso')
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setMessage(error.message)
        console.log('error')
      }
    }
  }, [])


  return (
    <section className='ContainerSection3'>
      <div className='ContentTextSection3'>
        <h2>Are you a parente withour a nanny and looking to share?</h2>
        <p>Leave us your name and email and we'll update you as soon as a share becomes avaiable in you area!</p>
      </div>

      <div className='InputContainer'>
        <Form onSubmit={SubmitMessage}>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your name'
            required
            className='InputForm'
          />

          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your email'
            required
            className='InputForm'
          />

          <button type='submit' className='ButtonSubmit'>Send</button>

        </Form>
      </div>
    </section>
  )
}
