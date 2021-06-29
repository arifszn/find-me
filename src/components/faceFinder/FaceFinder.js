import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import styled from 'styled-components';
import PageWrapper from '../layout/PageWrapper';
import Train from './Train';

const { Step } = Steps;

const StepContent = styled.div`
    min-height: 200px;
    padding: 20px;
    background-color: #fafafa;
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
`;

const StepAction = styled.div`
    margin-top: 24px;
    float: right;
`;

const steps = [
    {
        title: 'Train',
        description: <span className="text-gray-400">Provide minimum one photo of the person where the face is visible to train the model. All photos will be deleted after processing.</span>,
        content: <Train/>,
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

const FaceFinder = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

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
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
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