import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password } // Con input nos referimos al input del Mutation
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }
                    return <UserForm onSubmit={onSubmit} title='Registrarse' />
                  }
                }
              </RegisterMutation>
              <UserForm onSubmit={activateAuth} title='Iniciar sesión' />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
