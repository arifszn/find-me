import { Drawer, Button, Spin, Input, Form, Upload, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Utils from '../../helpers/Utils';

const uploadButton = (
    <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

const Find = (props) => {
    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);

    const validateImage = (file) => {
        if (!file.url && !file.preview) {
            const validType = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';
            if (!validType) {
                Utils.showTinyNotification('You can only upload image file!', 'error');
            }
            const validSize = file.size / 1024 / 1024 < 5;
            if (!validSize) {
                Utils.showTinyNotification('Image must smaller than 5MB!', 'error');
            }
            return validType && validSize;
        }
        return true;
    }

    const imageListHandleChange = (info) => {
        props.setImages(info.fileList.filter(file => validateImage(file)))
    };

    const handlePreview = async file => {
        console.log(file);
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    return (
        <React.Fragment>
            <div style={{margin: 24}}>
                <Upload
                    accept={['image/png', 'image/jpeg', 'image/jpg']}
                    listType="picture-card"
                    fileList={props.images}
                    beforeUpload={
                        () => {
                            return false;
                        }
                    }
                    onPreview={handlePreview}
                    onChange={imageListHandleChange}
                >
                    {props.images.length >= 1 ? null : uploadButton}
                </Upload>
            </div>
            <Modal
                visible={previewVisible}
                title={'Preview'}
                footer={null}
                centered
                onCancel={() => setPreviewVisible(false)}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </React.Fragment>
    )
}

Find.propTypes = {
    images: PropTypes.array.isRequired,
    setImages: PropTypes.func.isRequired,
}

export default Find;