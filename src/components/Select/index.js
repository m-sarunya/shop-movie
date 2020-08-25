import React from 'react'
import { SelectStyled, WapperSelectStyled, RedText, LabelText } from './styles'
import { Row, Col } from 'antd';
export const Select = ({ children, ...props }) => {
    return (
        <WapperSelectStyled>
            <Row gutter={8}>
                <Col>
                    {props.label && <LabelText> {props.label} </LabelText>}
                    {props.priority && <RedText> *  </RedText>}
                </Col>
                <Col>
                    <SelectStyled {...props}>
                        {children}
                    </SelectStyled>
                </Col>
            </Row>

        </WapperSelectStyled >
    )
}