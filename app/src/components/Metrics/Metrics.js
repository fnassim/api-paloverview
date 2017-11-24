import React from 'react';
import styled from 'styled-components';

const Metrics = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
`;

const MetricsTitle = styled.div`
    font-size: 11px;
`;

const MetricsNumber = styled.div`
   
    font-size: 24px;
`;

export default ({children, ...props}) => {
    return <Metrics {...props} max={props.max} value={props.value}>
        <MetricsTitle>{props.title}</MetricsTitle>
        <MetricsNumber>{props.value}</MetricsNumber>
    </Metrics>
};
