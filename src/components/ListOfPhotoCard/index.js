import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => (
  <ul>
    {
      [1, 2, 3].map(item => <li key={item}><PhotoCard /></li>)
    }
  </ul>
)
