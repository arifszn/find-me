import React, { useEffect, useState } from 'react';
import { Steps, Button, message, Spin } from 'antd';
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
    const [images, setImages] = useState([]);
    const [formattedImage, setFormattedImage] = useState([]);

    const [current, setCurrent] = useState(0);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [componentLoading, setComponentLoading] = useState(false);

    const [descriptors, setDescriptors] = useState(null);
    const [detections, setDetections] = useState([]);
    const [result, setResult] = useState(null);

    const steps = [
        {
            title: 'Train',
            description: <span className="text-gray-400">Provide minimum one photo of the person where the face is visible to train the model. All photos will be deleted after processing.</span>,
            content: <Train persons={persons} setPersons={setPersons}/>,
        },
        {
            title: 'Find',
            description: <span className="text-gray-400">Upload photos and find the persons in the uploaded photos.</span>,
            content: <Find images={images} setImages={setImages}/>,
        },
        {
            title: 'Result',
            description: '',
            content: <Result detections={detections} images={formattedImage} result={result}/>,
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
            processImages();
        }
    }, [current])

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const processImages = async () => {
        if (descriptors) {
            const container = document.createElement('div');
            container.style.position = 'relative';
            document.body.append(container)

            let canvas;
            const blobImages = [];
            
            for (const file of images) {
                let fileBlob = null;
                if (!file.url && !file.preview) {
                    fileBlob = file.originFileObj
                } else {
                    fileBlob = await Utils.urlToBlob(file.url || file.preview);
                }
                blobImages.push(fileBlob);
            }

            const faceMatcher = new faceapi.FaceMatcher(descriptors, 0.6);

            const uploadedImage = await faceapi.bufferToImage(blobImages[0])

            const _detections = await faceapi.detectAllFaces(uploadedImage).withFaceLandmarks().withFaceDescriptors();

            const _result = _detections.map(item => faceMatcher.findBestMatch(item.descriptor));


            // const container = document.createElement('div');
            /* container.append(uploadedImage);

            canvas = faceapi.createCanvasFromMedia(uploadedImage);
            const displaySize = { width: uploadedImage.width, height: uploadedImage.height }
            faceapi.matchDimensions(canvas, displaySize)

            const resizedDetections = faceapi.resizeResults(_detections, displaySize)

            const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor));
            console.log(results);

            let myArray = [];
            results.forEach((result, i) => {
                const box = resizedDetections[i].detection.box
                const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
                drawBox.draw(canvas)

                container.append(canvas)
            }) */

            setDetections(_detections);
            setResult(_result);
            setFormattedImage(blobImages)

            /* const resizedDetections = faceapi.resizeResults(detections, displaySize)
            const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
            results.forEach((result, i) => {
                const box = resizedDetections[i].detection.box
                const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
                drawBox.draw(canvas)
            })

            console.log(detections); */
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

        if (current === 1 && (!descriptors || !images.length)) {
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
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                </StepAction>
            </Spin>
        </PageWrapper>
    )
}

export default FaceFinder;