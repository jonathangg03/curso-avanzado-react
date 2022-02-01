import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password } // Con input nos referimos al input del Mutation
              const variables = { input }
              register({ variables }).then((response) => {
                const { signup } = response.data
                activateAuth(signup)
              })
            }
            const errorMsg = error && 'El usuario ya existe o hay otro problema.'
            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password } // Con input nos referimos al input del Mutation
              const variables = { input }
              login({ variables }).then(response => {
                const { login } = response.data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'
            return <UserForm onSubmit={onSubmit} title='Iniciar sesión' error={errorMsg} disabled={loading} />
          }
        }
      </LoginMutation>
    </>
  )
}
