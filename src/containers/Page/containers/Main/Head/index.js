import React, { useState, useEffect } from 'react'
import { Row, Col, Form, DatePicker, Button, Radio, Select, Input } from 'antd';
import { Box, Text } from '../../../../../components'
import { titleData } from '../../../../../helpers/titleData'
import nation from '../../../../../helpers/nation.json'
import { useDispatch } from 'react-redux';
import { addPerson, editPerson } from '../../../../../redux/actions/person.action'
import { uuid } from 'uuidv4';
import moment from 'moment';
import { IMaskInput } from 'react-imask';


const { Option } = Select;
const prefixSelector = (
    <Select style={{ width: 70 }}>
        <Option value="66">+66</Option>
        <Option value="87">+87</Option>
    </Select>
);

export default function Head({ formEdit, setFormEdit }) {


    const dispatch = useDispatch()
    const [formDefault, setFormDefault] = useState({
        _id: '',
        title: 'Mr.',
        firstName: '',
        lastName: '',
        birthday: '',
        nationality: 'Thailand',
        citizenID: '',
        gender: '',
        prefix: '+66',
        mobileNo: '',
        passportNo: '',
        expectedSalary: '',
    })
    const [checkSubmit, setCheckSubmit] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        setCheckSubmit(true)
        if (formDefault['title']
            && formDefault['firstName']
            && formDefault['lastName']
            && formDefault['birthday']
            && formDefault['nationality']
            && formDefault['mobileNo']
            && formDefault['expectedSalary']
        ) {
            if (formEdit) {
                dispatch(editPerson(formDefault))
                setFormEdit('')
            }
            else {
                const newPerson = {
                    _id: uuid(),
                    title: formDefault.title,
                    firstName: formDefault.firstName,
                    lastName: formDefault.lastName,
                    birthday: formDefault.birthday,
                    nationality: formDefault.nationality,
                    citizenID: formDefault.citizenID,
                    gender: formDefault.gender,
                    mobileNo: formDefault.mobileNo,
                    passportNo: formDefault.passportNo,
                    expectedSalary: formDefault.expectedSalary,
                }


                dispatch(addPerson(newPerson))
            }
            setCheckSubmit(false)
            setFormDefault({
                _id: '',
                title: 'Mr.',
                firstName: '',
                lastName: '',
                birthday: '',
                nationality: 'Thailand',
                citizenID: '',
                gender: '',
                prefix: '+66',
                mobileNo: '',
                passportNo: '',
                expectedSalary: '',
            })
        }
    }

    useEffect(() => {
        if (formEdit)
            setFormDefault(formEdit)
    }, [formEdit]);
    const onCheckRequired = (value) => {
        if (checkSubmit) {
            if (!formDefault[value])
                return true
        }
        else
            return false
    }
    const checkNumberOnly = (value) => {
        const regex = /[0-9]|\./
        if (regex.test(value)) {
            return true
        }
        else
            return false
    }

    return (
        <Box width={'90%'} border={'1px solid #d2d2d2'}>
            <form onSubmit={onSubmit}>
                <Row gutter={24} >
                    <Col>
                        <Row gutter={8}>
                            <Col><Text>Title:</Text><Text color='red'>*</Text></Col>
                            <Col>
                                <Select placeholder="Select Title"
                                    dropdownMatchSelectWidth
                                    value={formDefault.title}
                                    onChange={(ev) => { setFormDefault({ ...formDefault, title: ev }) }}     >
                                    {titleData.data.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.title} >
                                                {item.title}
                                            </Option >
                                        )
                                    })}
                                </Select>
                                {onCheckRequired('title') &&
                                    <Row>
                                        <Text color='red'>Please select title.</Text>
                                    </Row>
                                }
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row gutter={8}>
                            <Col><Text>First Name:</Text><Text color='red'>*</Text></Col>
                            <Col>
                                <Input
                                    value={formDefault?.firstName}
                                    onChange={(ev) => { setFormDefault({ ...formDefault, firstName: ev.target.value }) }} />
                                {onCheckRequired('firstName') &&
                                    <Row>
                                        <Text color='red'>Please input first name.</Text>
                                    </Row>
                                }
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row gutter={8}>
                            <Col><Text>Last Name:</Text><Text color='red'>*</Text></Col>
                            <Col>
                                <Input value={formDefault?.lastName}
                                    onChange={(ev) => { setFormDefault({ ...formDefault, lastName: ev.target.value }) }} />
                                {onCheckRequired('lastName') &&
                                    <Row>
                                        <Text color='red'>Please input last name.</Text>
                                    </Row>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row gutter={24} >
                    <Col>
                        <Row gutter={8} >
                            <Col><Text>Birthday:</Text><Text color='red'>*</Text></Col>
                            <Col>
                                <DatePicker format='MM-DD-YY'
                                    value={formDefault.birthday && moment(formDefault?.birthday)}
                                    onChange={(ev) => { setFormDefault({ ...formDefault, birthday: ev }) }} />
                                {onCheckRequired('birthday') &&
                                    <Row>
                                        <Text color='red'>Please select birthday.</Text>
                                    </Row>
                                }
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row gutter={8} >
                            <Col>
                                <Text>Nationality:</Text><Text color='red'>*</Text>
                            </Col>
                            <Col>
                                <Select
                                    placeholder="Select Nationality"
                                    dropdownMatchSelectWidth={200}
                                    value={formDefault?.nationality}
                                    onChange={(ev) => { setFormDefault({ ...formDefault, nationality: ev }) }}>
                                    {nation.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.Name} >
                                                {item.Name}
                                            </Option >
                                        )
                                    })}
                                </Select>
                                {onCheckRequired('nationality') &&
                                    <Row>
                                        <Text color='red'>Please select nationality.</Text>
                                    </Row>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row gutter={24} >
                    <Col>
                        <Row gutter={8}>
                            <Col><Text>CitizenID:</Text></Col>
                            <Col>
                                {/* <Input
                                    id="successMessage"
                                    inputmode='numeric'
                                    placeholder="X-XXXX-XXXXX-XX-X"
                                    value={formDefault?.citizenID}
                                    onChange={(ev) => { setFormDefault({ ...formDefault, citizenID: ev.target.value }) }} /> */}
                                <IMaskInput
                                    inputmode='numeric'
                                    mask='0-0000-00000-00-0'
                                    value={formDefault?.citizenID}
                                    onChange={(ev) => { setFormDefault({ ...formDefault, citizenID: ev.target.value }) }}
                                    unmask={true} // true|false|'typed'
                                    pplaceholder="X-XXXX-XXXXX-XX-X"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row gutter={8} >
                    <Col>
                        <Text>Gender:</Text>
                    </Col>
                    <Col>
                        <Radio.Group
                            value={formDefault?.gender}
                            onChange={(ev) => { setFormDefault({ ...formDefault, gender: ev.target.value }) }} >
                            <Radio value={'Male'}>Male</Radio>
                            <Radio value={'Female'}>Female</Radio>
                            <Radio value={'Unisex'}>Unisex</Radio>
                        </Radio.Group>
                    </Col>
                </Row>

                <Row gutter={8} >
                    <Col><Text>Mobile Phone</Text><Text color='red'>*</Text></Col>
                    <Col>
                        <Select style={{ width: 70 }}
                            value={formDefault?.prefix}
                            onChange={(ev) => { setFormDefault({ ...formDefault, prefix: ev }) }} >
                            <Option value="+66">+66</Option>
                            <Option value="+87">+87</Option>
                        </Select>
                    </Col>
                    <Col>
                        <Input value={formDefault?.mobileNo}
                            maxLength={9}
                            inputmode='numeric'
                            onChange={(ev) => { setFormDefault({ ...formDefault, mobileNo: ev.target.value }) }} />
                        {onCheckRequired('mobileNo') &&
                            <Row>
                                <Text color='red'>Please input mobile phone.</Text>
                            </Row>
                        }
                    </Col>
                </Row>
                <Row gutter={8} >
                    <Col><Text>Passport No:</Text></Col>
                    <Col>
                        <Input
                            inputmode='numeric'
                            value={formDefault?.passportNo}
                            onChange={(ev) => { setFormDefault({ ...formDefault, passportNo: ev.target.value }) }} />
                    </Col>
                </Row>

                <Row justify='space-between' align='middle'>
                    <Col>
                        <Row gutter={8}>
                            <Col><Text>Expected Salary</Text><Text color='red'>*</Text></Col>
                            <Col>
                                <Input
                                    inputmode='numeric'
                                    value={formDefault?.expectedSalary}
                                    onChange={(ev) => { setFormDefault({ ...formDefault, expectedSalary: ev.target.value }) }} />
                                {onCheckRequired('expectedSalary') &&
                                    <Row>
                                        <Text color='red'>Please input expected salary.</Text>
                                    </Row>
                                }
                            </Col>
                            <Col> THB</Col>
                        </Row>
                    </Col>

                    <Col>
                        <Button type="submit" htmlType="submit"> Submit </Button>
                    </Col>
                </Row>
            </form>
        </Box >
    )
}


