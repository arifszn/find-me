import { Spin, Row, Col, Image } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
    return (
        <React.Fragment>
            <Row style={{padding: 12}}>
                <Col span={24}>
                    {
                        props.result ? (
                            <div>
                                <Image
                                    src={typeof props.result.image !== 'undefined' ? props.result.image : null}
                                    preview={false}
                                    placeholder={true}
                                    className="rounded-lg z-shadow"
                                    style={{
                                        transition: '0.3s ease',
                                    }}
                                    alt={'result'}
                                />
                                <img
                                    alt="canvas" 
                                    className="absolute top-0 left-0" 
                                    src={typeof props.result.canvas !== 'undefined' ? props.result.canvas.toDataURL() : null} 
                                />
                            </div>
                        ) : (
                            <div className="my-16 text-center">
                                <Spin size="large"/>
                            </div>
                        )
                    }
                </Col>
            </Row>
        </React.Fragment>
    )
}

Result.propTypes = {
    result: PropTypes.object
}

export default Result;