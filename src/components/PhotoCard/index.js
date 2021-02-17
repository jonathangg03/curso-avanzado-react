import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Buttons, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.log('si')
        setShow(true)
        observer.disconnect()// Cuando el elemento ya este en el viewport del usuario, deje de escuchar, para que ya se quede ahí para siempre
      }
    })
    observer.observe(element.current)
  }, [element])
  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Buttons>
              <MdFavoriteBorder size='32px' />{likes} likes!
            </Buttons>
          </>
      }
    </Article>
  )
}
