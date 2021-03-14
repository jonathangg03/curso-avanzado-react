import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  console.log(email)
  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input type='text' placeholder='Email' disabled={disabled} {...email} />
        <Input type='password' placeholder='Password' disabled={disabled} {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {
        error && <Error>{error}</Error>
      }
    </>
  )
}
