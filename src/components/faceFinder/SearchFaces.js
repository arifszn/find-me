import { Upload, Modal } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Utils from '../../helpers/Utils';

const uploadButton = (
    <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

const SearchFaces = (props) => {
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
        let list = info.fileList.filter(file => validateImage(file));

        props.setImage(list.length ? list[0] : null);
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
                    fileList={props.image ? [props.image] : []}
                    beforeUpload={
                        () => {
                            return false;
                        }
                    }
                    onPreview={handlePreview}
                    onChange={imageListHandleChange}
                >
                    {props.image ? null : uploadButton}
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

SearchFaces.propTypes = {
    image: PropTypes.object,
    setImage: PropTypes.func.isRequired,
}

export default SearchFaces;