import styled from 'styled-components'

export const BoxStyled = styled.div`
  margin:auto;
  width: ${props => props.width || 'unset'};
  padding: 30px;
  border: ${props => props.border || 'none'};
  border-radius: 7px;
`
