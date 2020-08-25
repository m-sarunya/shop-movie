import React from 'react'
import { TextStyled } from './styles'

export const Text = ({ children, ...props }) => {
    return (
        <TextStyled {...props}>
            {children}
        </TextStyled>
    )
}