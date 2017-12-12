import React from 'react';
import styled from 'styled-components';

const Remarks = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`;

const RemarksTitle = styled.div`
    font-size: 11px;
    font-weight: bold;
`;

const RemarksContent = styled.p`
    //padding-top: 8px;
    font-size: 11px;
`;

export default ({children, ...props}) => {
    return <Remarks {...props} max={props.max} value={props.value}>
        <RemarksTitle>{props.title}</RemarksTitle>
        <RemarksContent>{props.content}</RemarksContent>
    </Remarks>
};
