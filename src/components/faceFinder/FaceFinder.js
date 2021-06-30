import React, { useEffect, useState } from 'react';
import { Steps, Button, Spin } from 'antd';
import styled from 'styled-components';
import PageWrapper from '../layout/PageWrapper';
import Train from './Train';
import * as faceapi from 'face-api.js';
import Find from './Find';
import Utils from '../../helpers/Utils';
import Result from './Result';

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
    const [image, setImage] = useState(null);
    const [result, setResult] = useState(null);

    const [current, setCurrent] = useState(0);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [componentLoading, setComponentLoading] = useState(false);

    const [descriptors, setDescriptors] = useState(null);

    const steps = [
        {
            title: 'Train',
            description: <span className="text-gray-400">Provide minimum one non-group image of the person to train the model. All images will be deleted after processing. You can add multiple persons to find.</span>,
            content: <Train persons={persons} setPersons={setPersons} />,
        },
        {
            title: 'Upload',
            description: <span className="text-gray-400">Upload a image to find if the person is present in that image.</span>,
            content: <Find image={image} setImage={setImage}/>,
        },
        {
            title: 'Result',
            description: '',
            content: <Result result={result}/>,
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

        if (current === 2) {
            setResult(null);
            startImageMatching();
        }
        // eslint-disable-next-line
    }, [current])

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const startImageMatching = async () => {
        if (descriptors && image) {
            setLoading(true);

            let fileBlob = null;

            if (!image.url && !image.preview) {
                fileBlob = image.originFileObj
            } else {
                fileBlob = await Utils.urlToBlob(image.url || image.preview);
            }

            const faceMatcher = new faceapi.FaceMatcher(descriptors, 0.6);
            const uploadedImage = await faceapi.bufferToImage(fileBlob);

            let canvas = faceapi.createCanvasFromMedia(uploadedImage);
            const displaySize = { width: uploadedImage.width, height: uploadedImage.height };
            faceapi.matchDimensions(canvas, displaySize);

            const _detections = await faceapi.detectAllFaces(uploadedImage).withFaceLandmarks().withFaceDescriptors();
            const _resizedDetections = faceapi.resizeResults(_detections, displaySize);
            const _result = _resizedDetections.map(item => faceMatcher.findBestMatch(item.descriptor));

            _result.forEach((result, i) => {
                const box = _resizedDetections[i].detection.box;
                const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString(), boxColor: "#096dd9" });
                drawBox.draw(canvas);
            })

            setResult({
                image: URL.createObjectURL(fileBlob),
                canvas: canvas
            });

            setLoading(false);
        }
    }

    const trainUploadedPhotos = () => {
        setComponentLoading(true);
        
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
            setComponentLoading(false);
            setDescriptors(faceDescriptors);
        })
    }

    const isNextDisabled = () => {
        if (current === 0 && (!modelLoaded || !persons.length)) {
            return true;
        }

        if (current === 1 && (!descriptors || !image)) {
            return true;
        }

        return false;
    }

    return (
        <PageWrapper className="m-10">
            <Spin spinning={componentLoading} /* delay={500} */>
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
                        <Button 
                            type="primary" 
                            onClick={() => Utils.showTinyNotification('Processing complete!', 'success')}
                            loading={loading}
                        >
                            Done
                        </Button>
                    )}
                </StepAction>
            </Spin>
        </PageWrapper>
    )
}

export default FaceFinder;