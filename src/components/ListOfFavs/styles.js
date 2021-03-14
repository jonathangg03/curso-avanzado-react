import Styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = Styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
  }
`
export const Grid = Styled.div`
  padding-top: 32px
`

export const Image = Styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
