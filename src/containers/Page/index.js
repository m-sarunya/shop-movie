import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Input, Row, Col, Button } from 'antd';
import { Box, Card } from '../../components'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { addCart } from '../../redux/actions/cart.action';
import { Link } from "react-router-dom";
import axios from 'axios'
const Page = () => {
    const dispatch = useDispatch();
    const [dataShow, setDataShow] = useState({})
    const [searchData, setSearchData] = useState()
    useEffect(() => {
        (() => {
            axios.get('https://api.themoviedb.org/3/search/movie/', {
                params: {
                    api_key: 'b9dffb0294516881962ced871a566940',
                    query: 'a'
                }
            }).then((res) => {
                setDataShow(res.data.results)
                setSearchData(res.data.results)
            })
        }

        )()
    }, [])

    const onSearch = (e) => {
        const result = dataShow.filter((item) => {
            const name = item.original_title.toUpperCase();
            const value = e.target.value.toUpperCase();
            return name.indexOf(value) >= 0;
        })
        setSearchData(result);
    }
    const onAdd = (value) => {
        dispatch(addCart(value))
    };

    return (
        <Box>
            <Row justify="center">
                <Col xs={16} offset={4}>
                    <Input suffix={<SearchOutlined className="site-form-item-icon" />} onChange={onSearch} size="large" />
                </Col>
                <Col offset={3} xs={1}>
                    <Link to='/cart' > <ShoppingCartOutlined style={{ fontSize: '32px' }} /></Link>
                </Col>
            </Row>
            <Row justify="center">
                {searchData?.map((item, index) => (
                    <Col key={index}>
                        <Card urlImg={item.poster_path} detail={item.overview} name={item.original_title}>
                            <Row justify='end' gutter={16} align='middle'>
                                <Col>{(Number(item.popularity).toFixed(0) * 10).toLocaleString('th-TH', {
                                    style: 'currency', currency: 'THB'
                                })}</Col>
                                <Col>
                                    <Button onClick={() => { onAdd(item) }}>Add <ShoppingCartOutlined style={{ fontSize: '16px' }} /></Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>)
                )}
            </Row>
        </Box>
    )

}

export default Page
