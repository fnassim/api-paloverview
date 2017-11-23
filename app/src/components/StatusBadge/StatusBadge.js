import React from 'react';
import styled from 'styled-components';

const StatusBadge = styled.div`
    background-color: ${props => {
    return {
        good: "#4CAF50",
        bof: "#FF9800",
        bad: "#F44336"
    }[props.status] || "#ffffff"
}};
    border-radius: 50%;
    height: 35px;
    width: 35px;
    position: relative;
    cursor: pointer;
`;

export default ({children, ...props}) => {
    return <StatusBadge {...props}/>;
};
