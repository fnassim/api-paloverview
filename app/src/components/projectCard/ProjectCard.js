import React from 'react';
import styled from 'styled-components';
import StatusBadge from '../StatusBadge/StatusBadge'
import ProgressBar from '../ProgressBar/ProgressBar'

const ProjectCard = styled.div`
    padding: 0 16px 0 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 200ms cubic-bezier(.25,.8,.25,1);
    background: #fff;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    height: 300px;
    cursor: pointer;
    &:hover {
        -webkit-transition: all 100ms ease-in;
        -webkit-transform: scale(1.01);
        box-shadow:  0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
   }
`;

const ProjectCardTopWrapper = styled.div`
    display: flex;
    padding-top: 24px;
    width: 100%;
`;

const ProjectCardBadgeWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 50%;
`;

const ProjectCardTitleWrapper = styled.div`
    width: 50%;
`;

const ProjectCardTitle = styled.div`
    font-weight: bold;
    color : #2a2a2a;
    font-size: 18px;
    padding
`;

const ProjectCardSubTitle = styled.div`
    color : #9e9e9e;
    font-size: 12px;
    padding
`;

export default ({children, ...props}) => {
    return <ProjectCard {...props}>
        <ProjectCardTopWrapper>
            <ProjectCardTitleWrapper>
                <ProjectCardTitle>{props.title}</ProjectCardTitle>
                <ProjectCardSubTitle>{props.subTitle}</ProjectCardSubTitle>
            </ProjectCardTitleWrapper>
            <ProjectCardBadgeWrapper>
                <StatusBadge status={props.status}/>
            </ProjectCardBadgeWrapper>
        </ProjectCardTopWrapper>
        <ProgressBar max={props.totalSprints} value={props.currentSprint}/>
    </ProjectCard>;
};
