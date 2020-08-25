import React, { useState } from 'react'
import { Table, Checkbox, Row } from 'antd';
import { Containers, Box, Button } from '../../../../components'
import Head from './Head/index'
import { useSelector, useDispatch } from 'react-redux';

import { deleteAllPerson, deleteByIdPerson } from '../../../../redux/actions/person.action'

const Main = () => {
    const dispatch = useDispatch()
    const personData = useSelector((state) => state.personData)
    localStorage.setItem('personData', JSON.stringify(personData))
    const [selectAll, setSelectAll] = useState(false)
    const [selectList, setSelectList] = useState([])
    const [formEdit, setFormEdit] = useState()

    const onCheckBox = (id) => {
        if (!selectList.find((item) => { return item === id }))
            setSelectList([...selectList, id])
        else {
            setSelectList(selectList.filter((item) => {
                return item !== id
            }))
        }
    }

    const columns = [
        {
            title: '',
            dataIndex: '_id',
            key: '_id',
            render: (text, record) => (
                <>
                    <Checkbox onClick={(event) => { onCheckBox(record._id) }} name='checkTable' checked={selectList.find((item) => { return item === record._id })}>
                    </Checkbox>
                </>
            )
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record, index) => {
                return record.firstName + " " + record.lastName
            }
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Mobile Phone',
            dataIndex: 'mobileNo',
            key: 'mobileNo',
            render: (text, record, index) => {
                return record.prefix + record.mobileNo
            }
        },
        {
            title: 'Nationality',
            dataIndex: 'nationality',
            key: 'nationality',
        },
        {
            title: '',
            dataIndex: 'access',
            key: 'access',
            render: (tags, record) => (
                <>
                    <Button onClick={() => { onEditById(record._id) }}>Edit</Button>  <Button danger onClick={() => { onDeleteById(record._id) }}>Delete</Button>
                </>
            )
        },
    ];
    const onSelectAll = () => {
        const statusNow = selectAll
        setSelectAll(!statusNow)
        if (!statusNow)
            setSelectList(personData.data.map((item) => { return item._id }))
        else
            setSelectList([])
    }
    const onDeleteAll = () => {
        if (selectAll) { dispatch(deleteAllPerson()) }
        else if (selectList) {
            selectList.forEach(item => {
                dispatch(deleteByIdPerson(personData.data.find(value => {
                    return String(value._id) === String(item)
                })._id
                ))
            }
            )
        }
    }
    const onDeleteById = (id) => {
        dispatch(deleteByIdPerson(id))
    }
    const onEditById = (id) => {
        setFormEdit(personData.data.find((item) => { return String(item._id) === String(id) }))
    }

    return (
        <Containers>
            <Head
                formEdit={formEdit}
                setFormEdit={setFormEdit}
            ></Head>
            <Box width='90%'>
                <Row>
                    <Checkbox onClick={onSelectAll}>Select All</Checkbox>
                    <Button onClick={onDeleteAll} danger>Delete</Button>
                </Row>
                <Table dataSource={personData.data} columns={columns} />
            </Box>
        </Containers >
    )
}

export default Main
