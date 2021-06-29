import { Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import PersonPopup from './PersonPopup';
import {
    DeleteOutlined
} from '@ant-design/icons';

const Train = (props) => {
    const [displayPersonPopup, setDisplayPersonPopup] = useState(false);

    const deletePerson = (person) => {
        let array = [...props.persons];

        let index = array.findIndex(element => element === person);

        if (index !== -1) {
            array.splice(index, 1);
        }

        props.setPersons(array);
    }

    const addNew = (
        <div className="rounded sm:w-full py-16 text-center opacity-50 hoverable cursor-pointer my-6" onClick={() => setDisplayPersonPopup(true)}>
            <svg  className="feather feather-plus mx-auto" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <div className="py-4">
                Add <span className="font-medium">Person</span> to Search
            </div>
        </div>
    )

    return (
        <React.Fragment>
            <Row gutter={24} align="middle" style={{margin: '24px 12px 0 12px'}}>
                {
                    props.persons.map((person, index) => (
                        <Col 
                            xl={6}
                            lg={6}
                            md={12}
                            sm={24}
                            xs={24}
                            style={{marginBottom: 24}}
                        >
                            <div className="bg-white px-4 py-6 rounded-lg shadow-lg">
                                <div 
                                    className="mx-auto h-40 rounded-md bg-cover bg-no-repeat bg-center"
                                    style={{backgroundImage: `url(${person.images[0].thumbUrl})`}}
                                ></div>
                                <div className="mt-2 text-center">
                                    <h5 className="font-bold font-mono text-gray-400">{person.name}</h5>
                                </div>
                                <div className="flex justify-center mt-2">
                                    <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} onClick={() => deletePerson(person)}/>
                                </div>
                            </div>
                        </Col>
                    ))
                }
                <Col 
                    xl={6}
                    lg={6}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{marginBottom: 24}}
                >
                    {addNew}
                </Col>
            </Row>
            {
                displayPersonPopup && (
                    <PersonPopup
                        title={'Add Person'}
                        visible={displayPersonPopup}
                        handleCancel={
                            () => {
                                setDisplayPersonPopup(false);
                            }
                        }
                        submitCallback={
                            (data) => {
                                let array = [...props.persons];
                                array.push(data);
                                props.setPersons(array);
                                setDisplayPersonPopup(false);
                            }
                        }
                    />
                )
            }
        </React.Fragment>
    )
}

export default Train;