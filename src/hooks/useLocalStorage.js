import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue// Sí el item es diferente de null, parseamos lo que esta en el localStorage, porque lo que este guarda siempre es un string, así que si queremos recuperar el valor que habiamos guardado, lo debemos parsear como json
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))// Para guardar un string, no el valor directamente
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
