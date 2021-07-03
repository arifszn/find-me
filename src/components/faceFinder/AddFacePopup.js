import { Drawer, Button, Spin, Input, Form, Upload, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import Utils from '../../helpers/Utils';
import PropTypes from 'prop-types';

const StyledDrawer = styled(Drawer)`
    .ant-drawer-content-wrapper {
        width: 520px !important;
        @media (max-width: 768px) {
            max-width: calc(100vw - 16px) !important;
        }
    }
`;

const uploadButton = (
    <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

const AddFacePopup = (props) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState((typeof props.loading !== 'undefined') ? props.loading : false);
    const [componentLoading, setComponentLoading] = useState((typeof props.componentLoading !== 'undefined') ? props.componentLoading : false);

    const [imageFileList, setImageFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(props.visible);
        }, 100);
    }, [props.visible])

    useEffect(() => {
        if (typeof props.loading !== 'undefined') {
            setLoading(props.loading)
        }
    }, [props.loading])

    useEffect(() => {
        if (typeof props.componentLoading !== 'undefined') {
            setComponentLoading(props.componentLoading)
        }
    }, [props.componentLoading])

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => {
            props.handleCancel();
        }, 400);
    };

    const handleOk = () => {
        form
        .validateFields()
        .then(async (values) => {
            let images = [];

            for (const file of values.images) {
                let fileBlob = null;
                if (!file.url && !file.preview) {
                    fileBlob = file.originFileObj
                } else {
                    fileBlob = await Utils.urlToBlob(file.url || file.preview);
                }
                images.push(fileBlob);
            }

            props.submitCallback({
                name: values.name,
                images: images
            })
        })
        .catch((info) => {
            console.log('Validate Failed:', info);
        });
    }

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
        setImageFileList(info.fileList.filter(file => validateImage(file)))
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

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    return (
        <StyledDrawer
            title={props.title}
            onClose={handleClose}
            visible={visible}
            destroyOnClose={true}
            maskClosable={false}
            forceRender={true}
            footer={
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button disabled={componentLoading} onClick={handleClose} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                    <Button disabled={componentLoading} onClick={handleOk} type="primary" loading={loading}>
                        Save
                    </Button>
                </div>
            }
        >
            <Spin spinning={componentLoading} size="large" delay={500}>
                <Form
                    preserve={false}
                    form={form}
                    layout="vertical"
                    name="face-form"
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the face's name"
                            },
                        ]}
                    >
                        <Input placeholder="Enter the face's name" /* autocomplete="off" *//>
                    </Form.Item>
                    <Form.Item
                        name="images"
                        label="Images"
                        getValueFromEvent={normFile}
                        rules={[
                            {
                                required: true,
                                message: 'Please upload minimum 1 image of the face',
                            },
                        ]}
                    >
                        <Upload
                            accept={['image/png', 'image/jpeg', 'image/jpg']}
                            listType="picture-card"
                            fileList={imageFileList}
                            beforeUpload={
                                () => {
                                    return false;
                                }
                            }
                            onPreview={handlePreview}
                            onChange={imageListHandleChange}
                        >
                            {imageFileList.length >= 8 ? null : uploadButton}
                        </Upload>
                    </Form.Item>
                </Form>
                <Modal
                    visible={previewVisible}
                    title={'Preview'}
                    footer={null}
                    centered
                    onCancel={() => setPreviewVisible(false)}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </Spin>
        </StyledDrawer>
    );
}

AddFacePopup.propTypes = {
    handleCancel: PropTypes.func.isRequired,
    submitCallback: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    componentLoading: PropTypes.bool,
    title: PropTypes.node,
}

export default AddFacePopup;