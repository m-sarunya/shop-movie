import styled from 'styled-components'
import { Card, Typography } from 'antd';
export const CardStyled = styled(Card)`
border-radius:2px;
margin:15px;
padding:15px
`
export const ParagraphStyled = styled(Typography.Paragraph)`
width: 200px;
max-width: 200px;
overflow-y: "auto";
`

export const ImageStyled = styled.img`
width: 200px;
height:auto;
`

export const DetailStyled = styled.p`
max-width: 200px;
max-height:66px;

    overflow: hidden;
    text-overflow: ellipsis;
`