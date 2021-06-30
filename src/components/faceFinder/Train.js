import { Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import PersonPopup from './PersonPopup';
import {
    DeleteOutlined
} from '@ant-design/icons';
import PropTypes from 'prop-types';

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
        <div className="rounded sm:w-full py-16 text-center opacity-50 z-hover cursor-pointer my-6" onClick={() => setDisplayPersonPopup(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus  mx-auto"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
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
                            key={index}
                        >
                            <div className="bg-white px-4 py-6 rounded-lg shadow-lg">
                                <div>
                                    <img 
                                        src={URL.createObjectURL(person.images[0])}
                                        alt={'thumbnail'}
                                        className="mx-auto h-40 rounded-md object-cover"
                                    />
                                </div>
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

Train.propTypes = {
    persons: PropTypes.array.isRequired,
    setPersons: PropTypes.func.isRequired,
}

export default Train;