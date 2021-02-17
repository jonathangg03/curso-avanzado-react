import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => (
  <ul>
    {
      [1, 2, 3, 4, 5, 6, 7].map(item => <PhotoCard key={item} />)
    }
  </ul>
)