import React from 'react'
import PropTypes from 'prop-types'
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

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
