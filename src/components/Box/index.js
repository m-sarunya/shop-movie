import React from 'react'
import { BoxStyled } from './styles'

export const Box = ({ children, ...props }) => {
    return (
        <BoxStyled {...props}>
            {children}
        </BoxStyled>
    )
}