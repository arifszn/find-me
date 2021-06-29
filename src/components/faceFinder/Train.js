import { Card, Row, Col, Image } from 'antd';
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';

const {Meta} = Card;

const imageStyle = {
    objectFit: 'cover',
    opacity: '0.8'
}

const Train = () => {
    return (
        <React.Fragment>
            <Row gutter={24} align="middle">
                <Col span={6}>
                    {/* <Card
                        hoverable={true}
                        size="small"
                        bordered={true}
                        cover={
                            <Image
                                height={100}
                                src={'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}
                                style={imageStyle}
                                preview={false}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta title="Europe Street beat"/>
                    </Card> */}
                    {/* <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4"> */}
                    <div className="bg-white px-4 py-6 rounded-lg shadow-lg">
                        <div className="mx-auto h-40 bg-gray-200 rounded-md"></div>
                        <div className="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
                        <div className="flex justify-center mt-4">
                            <div className="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                            <div className="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="rounded sm:w-full md:w-48 md:h-48 py-16 text-center opacity-50 md:border-solid md:border-2 md:border-gray-400 mx-auto hoverable cursor-pointer">
                        <svg  className="feather feather-plus mx-auto" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        <div className="py-4">
                            Add <span className="font-medium">Person</span> to Search
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Train;