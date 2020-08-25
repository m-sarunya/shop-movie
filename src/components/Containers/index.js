import React from 'react'
import { ContainersStyled } from './styles'

export const Containers = ({ children }) => {
  return (
    <ContainersStyled>
      {children}
    </ContainersStyled>
  )
}