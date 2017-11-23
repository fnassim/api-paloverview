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
    border-radius: 50%;
    height: 35px;
    width: 35px;
    position: relative;
`;

const BadgeIcon = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
`;

export default ({children, ...props}) => {
    return <StatusBadge {...props}>
        <BadgeIcon>
            {
                {
                    good: <img alt="" src="../../../public/icons/ic_thumb_up_white_18px.svg"/>,
                    soso: <img alt="" src="../../../public/icons/ic_warning_white_18px.svg"/>,
                    bad: <img alt="" src="../../../public/icons/ic_thumb_down_white_18px.svg"/>
                }[props.status]
            }
        </BadgeIcon>
    </StatusBadge>
};
