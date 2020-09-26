import React from 'react'
import { CardStyled, ImageStyled, ParagraphStyled } from './styles'

export const Card = ({ children, ...props }) => {
    const url = "http://image.tmdb.org/t/p/w300"
    return (
        <CardStyled {...props} cover={<ImageStyled alt="example" src={url + props.urlImg} />}>
            <p>{props.name}</p>
            <ParagraphStyled ellipsis={{ rows: 3 }}>{props.detail}</ParagraphStyled>
            { children}
        </CardStyled >
    )
}