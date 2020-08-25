import React from 'react'
import { InputStyled, WapperInputStyled, RedText, LabelText } from './styles'
import { Row, Col } from 'antd';
export const Input = ({ children, ...props }) => {
    return (
        <WapperInputStyled>
            <Row gutter={8}>
                <Col>
                    {props.label && <LabelText> {props.label} </LabelText>}
                    {props.priority && <RedText> *  </RedText>}
                </Col>
                <Col>
                    <InputStyled {...props}>
                        {children}
                    </InputStyled>
                </Col>
            </Row>

        </WapperInputStyled>
    )
}