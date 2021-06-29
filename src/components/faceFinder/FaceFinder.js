import React, { useEffect, useState } from 'react';
import { Steps, Button, message } from 'antd';
import styled from 'styled-components';
import PageWrapper from '../layout/PageWrapper';
import Train from './Train';
import * as faceapi from 'face-api.js';

const { Step } = Steps;

const StepContent = styled.div`
    background-color: #fafafa;
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
`;

const StepAction = styled.div`
    margin-top: 24px;
    float: right;
`;

const FaceFinder = () => {
    const [persons, setPersons] = useState([]);
    const [current, setCurrent] = useState(0);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    const [descriptors, setDescriptors] = useState(null);

    const steps = [
        {
            title: 'Train',
            description: <span className="text-gray-400">Provide minimum one photo of the person where the face is visible to train the model. All photos will be deleted after processing.</span>,
            content: <Train persons={persons} setPersons={setPersons}/>,
        },
        {
            title: 'Second',
            description: '',
            content: 'Second-content',
        },
        {
            title: 'Last',
            description: '',
            content: 'Last-content',
        },
    ];

    useEffect(() => {
        Promise.all([
            faceapi.nets.faceRecognitionNet.loadFromUri(`${process.env.PUBLIC_URL}/assets/models`),
            faceapi.nets.faceLandmark68Net.loadFromUri(`${process.env.PUBLIC_URL}/assets/models`),
            faceapi.nets.ssdMobilenetv1.loadFromUri(`${process.env.PUBLIC_URL}/assets/models`)
        ]).then(() => {
            setModelLoaded(true);
        })
    }, [])

    useEffect(() => {
        if (current === 0) {
            setDescriptors(null);
        }
        
        if (current === 1) {
            trainUploadedPhotos();
        }
    }, [current])

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const trainUploadedPhotos = () => {
        setLoading(true);
        
        Promise.all(
            persons.map(person => {
                const descriptions = [];

                for (const imageBlob of person.images) {
                    try {
                        faceapi.bufferToImage(imageBlob)
                        .then(img => {
                            faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                            .then(detections => {
                                if (detections) {
                                    descriptions.push(detections.descriptor);
                                }
                            })
                        });
                    } catch (error) {
                        console.error(error);
                    }
                }

                return new faceapi.LabeledFaceDescriptors(person.name, descriptions);
            })
        ).then(faceDescriptors => {
            setLoading(false);
            setDescriptors(faceDescriptors);
        })
    }

    const isNextDisabled = () => {
        if (current === 0 && (!modelLoaded || !persons.length)) {
            return true;
        }

        if (current === 1 && !descriptors) {
            return true;
        }

        return false;
    }

    return (
        <PageWrapper className="m-10">
            <Steps current={current} direction="vertical">
                {steps.map(item => (
                    <Step key={item.title} title={item.title} description={item.description}/>
                ))}
            </Steps>
            <StepContent>{steps[current].content}</StepContent>
            <StepAction>
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()} loading={loading}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button 
                        type="primary" 
                        onClick={() => next()}
                        disabled={isNextDisabled()}
                        loading={loading}
                    >
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
            </StepAction>
        </PageWrapper>
    )
}

export default FaceFinder;