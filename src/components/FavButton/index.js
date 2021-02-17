import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Buttons } from './styles'
export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Buttons onClick={onClick}>
      <Icon size='32px' />
      {likes}
    </Buttons>
  )
}
