import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Button, Empty, Modal, Statistic } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Box, Text, CartItem } from '../../components'
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCart } from '../../redux/actions/cart.action';
const Cart = () => {
    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 60; // Moment is also OK
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartData);
    const onClear = () => {
        dispatch(deleteAllCart())
    }
    const processPrice = () => {
        let count = 0;
        let summary = 0;
        cartData.forEach((item) => {
            count += item.count
            summary += (item.popularity.toFixed(0) * 10 * item.count)
        })

        if (count > 5) {
            summary = summary - 0.2 * summary
        }
        else if (count > 3) {
            summary = summary - 0.1 * summary
        }

        return (Number(summary).toLocaleString('th-TH', { style: 'currency', currency: 'THB' }))
    }


    const handleCancel = () => {
        setVisible(false)
    };
    const openModal = () => {
        setVisible(true)
    };
    const openWindow = () => {
        window.open('https://create.piktochart.com/output/48091162-my-visual')
    }


    return (
        <Box>
            <Modal
                title="ชำระเงิน"
                visible={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleCancel}>
                        Cancel
                    </Button>,
                ]}
            >
                <Row >
                    <Col>
                        <Row> <Text>ชำระเงินได้ทาง:<span className='link' onClick={openWindow} >คลิ๊ก</span></Text></Row>
                        <Row>
                            <Countdown title="Countdown" value={deadline} onFinish={handleCancel} />
                        </Row>
                    </Col>
                </Row>
            </Modal>
            <Row justify="space-between" align='middle'>
                <Col> <Link to='/' > <Button>Back</Button></Link></Col>
                <Col>
                    <Text fontSize='32px'><ShoppingCartOutlined /> Cart</Text>
                </Col>
                <Col> <Button onClick={onClear}>Clear All</Button></Col>
            </Row>
            <Box>
                {cartData?.length > 0 ?
                    <Fragment>
                        {cartData?.map((item, index) => (
                            <CartItem
                                item={item}
                            ></CartItem>
                        ))}
                    </Fragment>
                    :
                    <Empty />
                }
            </Box>
            <div className='bottom-bar'>
                <Row justify='end' align='middle' gutter={16}>
                    <Col>
                        รวมทั้งหมด: {processPrice()}
                    </Col>
                    <Col>
                        <Button onClick={openModal}>Confirm</Button>
                    </Col>
                </Row>
            </div>
        </Box>
    )
}
export default Cart
