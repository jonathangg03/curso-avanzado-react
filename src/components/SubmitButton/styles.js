import Styled from 'styled-components'

export const Button = Styled.button`
  background: #8d00ff;
  border-radius: 3px;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
  &[disabled] {
    opacity: .3
  }
`
