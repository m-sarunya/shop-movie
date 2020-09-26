import React from 'react'
import { CardStyled, ImageStyled, InputStyled } from './styles'
import { Row, Col, Button, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { editCountCart } from '../../redux/actions/cart.action';
export const CartItem = ({ children, ...props }) => {
    const dispatch = useDispatch();
    const url = "http://image.tmdb.org/t/p/w300"
    const onChange = (e) => {
        const regex = /^[1-9][0-9]*$/
        if (regex.test(e.target.value)) {
            dispatch(editCountCart(props.item.id, e.target.value))
        }
    }
    const onPlus = () => {
        if (Number(props.item.count) < 999) {
            dispatch(editCountCart(props.item.id, Number(props.item.count) + 1))
        }
    }
    const onMinus = () => {
        if (Number(props.item.count) > 0) {
            dispatch(editCountCart(props.item.id, Number(props.item.count) - 1))
        }
    }

    return (
        <CardStyled {...props} >
            <Row gutter={8} align='middle'>
                <Col xs={3}>
                    <ImageStyled alt="example" src={url + props.item.poster_path} />
                </Col>
                <Col xs={14}>
                    <Row>
                        {props.item.original_title}
                    </Row>
                    <Row>
                        <Typography.Paragraph
                            style={{ height: 100, overflowY: "auto" }}
                            ellipsis={{ rows: 3, expandable: true }}
                        >
                            {props.item.overview}
                        </Typography.Paragraph>
                    </Row>
                    <Row >
                        <Col>
                            {(Number(props.item.popularity).toFixed(0) * 10).toLocaleString('th-TH', {
                                style: 'currency', currency: 'THB'
                            })}
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} offset={3} >
                    <Row justify='end' >
                        <Col>
                            <Button onClick={onMinus}>-</Button>
                            <InputStyled value={props.item.count}
                                onChange={onChange}
                                placeholder="Input a number"
                                maxLength={3}
                            ></InputStyled>
                            <Button onClick={onPlus}>+</Button>
                        </Col>
                        <Col>
                            =  {(Number(props.item.popularity).toFixed(0) * 10 * props.item.count).toLocaleString('th-TH', {
                            style: 'currency', currency: 'THB'
                        })}
                        </Col>

                    </Row>
                </Col>
            </Row>
        </CardStyled >
    )
}