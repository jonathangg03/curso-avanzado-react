import Styled from 'styled-components'

export const Form = Styled.form`
  padding: 16px 0
`
export const Input = Styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3
  }
`

export const Title = Styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 9px 0;
`

export const Error = Styled.span`
  font-size: 14px;
  color: red;
`
