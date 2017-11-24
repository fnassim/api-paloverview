import React from 'react';
import styled from 'styled-components';

const StatusBadge = styled.div`
    background-color: ${props => {
    return {
        good: "#4CAF50",
        soso: "#FF9800",
        bad: "#F44336"
    }[props.status] || "#ffffff"
}};
    border-radius: 2px;
    height: 18px;
    width: 85px;
    position: relative;
`;

const BadgeText = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    font-weight: bold;
    color: #ffffff;
`;

export default ({children, ...props}) => {
    return <StatusBadge {...props}>
        <BadgeText>
            {
                {
                    good: "HEALTHY",
                    soso: "NEEDS ATTENTION",
                    bad: "DANGER"
                }[props.status]
            }
        </BadgeText>
    </StatusBadge>
};
