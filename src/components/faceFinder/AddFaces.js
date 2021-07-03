import { Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import AddFacePopup from './AddFacePopup';
import {
    DeleteOutlined
} from '@ant-design/icons';
import PropTypes from 'prop-types';

const AddFaces = (props) => {
    const [displayAddFacePopup, setDisplayAddFacePopup] = useState(false);

    const deleteFace = (face) => {
        let array = [...props.faces];

        let index = array.findIndex(element => element === face);

        if (index !== -1) {
            array.splice(index, 1);
        }

        props.setFaces(array);
    }

    const addNew = (
        <div className="rounded sm:w-full py-16 text-center opacity-50 z-hover cursor-pointer my-6" onClick={() => setDisplayAddFacePopup(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus  mx-auto"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            <div className="py-4">
                Add <span className="font-medium">Face</span> to Search
            </div>
        </div>
    )

    return (
        <React.Fragment>
            <Row gutter={24} align="middle" style={{margin: '24px 12px 0 12px'}}>
                {
                    props.faces.map((face, index) => (
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
                                        src={URL.createObjectURL(face.images[0])}
                                        alt={'thumbnail'}
                                        className="mx-auto h-40 rounded-md object-cover"
                                    />
                                </div>
                                <div className="mt-2 text-center">
                                    <h5 className="font-bold font-mono text-gray-400">{face.name}</h5>
                                </div>
                                <div className="flex justify-center mt-2">
                                    <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} onClick={() => deleteFace(face)}/>
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
                displayAddFacePopup && (
                    <AddFacePopup
                        title={'Add Face'}
                        visible={displayAddFacePopup}
                        handleCancel={
                            () => {
                                setDisplayAddFacePopup(false);
                            }
                        }
                        submitCallback={
                            (data) => {
                                let array = [...props.faces];
                                array.push(data);
                                props.setFaces(array);
                                setDisplayAddFacePopup(false);
                            }
                        }
                    />
                )
            }
        </React.Fragment>
    )
}

AddFaces.propTypes = {
    faces: PropTypes.array.isRequired,
    setFaces: PropTypes.func.isRequired,
}

export default AddFaces;