import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import styled from 'styled-components';

const { Step } = Steps;

const StepContent = styled.div`
    min-height: 200px;
    margin-top: 16px;
    padding-top: 80px;
    text-align: center;
    background-color: #fafafa;
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
`;

const StepAction = styled.div`
    margin-top: 24px;
    float: right;
`;

const Wrapper = styled.div`
    margin: 20px;
`;

const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
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
        <Wrapper>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
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
        </Wrapper>
    )
}

export default FaceFinder;