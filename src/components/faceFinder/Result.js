import { Drawer, Button, Spin, Input, Form, Upload, Modal, Row, Col, Carousel, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Utils from '../../helpers/Utils';
import {
  RightSquareTwoTone,
  LeftSquareTwoTone,
} from '@ant-design/icons';

const Result = (props) => {

    const resultBox = () => {
        return props.detections.map((item, i) => {
            let _H = item.detection.box.height;
            let _W = item.detection.box.width;
            let _X = item.detection.box._x;
            let _Y = item.detection.box._y;

            return (
                <div key={i}>
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            border: 'solid',
                            borderColor: 'blue',
                            height: _H,
                            width: _W,
                            transform: `translate(${_X}px,${_Y}px)`
                        }}
                    >
                        {props.result ? (
                            <p
                                style={{
                                    backgroundColor: 'blue',
                                    border: 'solid',
                                    borderColor: 'blue',
                                    width: _W,
                                    marginTop: 0,
                                    color: '#fff',
                                    transform: `translate(-3px,${_H}px)`
                                }}
                            >
                                {props.result[i]._label}
                            </p>
                        ) : null}
                    </div>
                </div>
            );
        });
    }

    const getFormattedImage = async (_image) => {
        /* let fileBlob = null;
        if (!_image.url && !_image.preview) {
            fileBlob = _image.originFileObj
        } else {
            fileBlob = await Utils.urlToBlob(_image.url || _image.preview);
        } */
        return _image;
        return URL.createObjectURL(_image);
    }

    return (
        <React.Fragment>
            <Row style={{padding: 12}}>
                <Col span={24}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute' }}>
                            <img src={props.images.length ? URL.createObjectURL(props.images[0]) : null} alt="imageURL" />
                        </div>
                        {resultBox()}
                    </div>
                </Col>
            </Row>
            {/* <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute' }}>
                    <img src={props.images.length ? URL.createObjectURL(props.images[0]) : null} alt="imageURL" />
                </div>
                {resultBox()}
            </div> */}
        </React.Fragment>
    )
}

Result.propTypes = {

}

export default Result;