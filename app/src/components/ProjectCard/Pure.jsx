import React from 'react';
import styled from 'styled-components';
import StatusBadge from '../StatusBadge/StatusBadge'
import ProgressBar from '../ProgressBar/ProgressBar'
import Metrics from '../Metrics/Metrics'
import Remarks from '../Remarks/Remarks'

const ProjectCard = styled.div`
    margin: 10px 10px 10px 10px;
    padding: 0 16px 0 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 80ms;
    background: #fff;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    height: 300px;
    cursor: pointer;
    &:hover {
        -webkit-transition: all 80ms ease-in;
        -webkit-transform: scale(1.03);
        box-shadow:  0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
   }
`;

const ProjectCardTopWrapper = styled.div`
    display: flex;
    padding-top: 24px;
    width: 100%;
`;

const ProjectCardMetricsWrapper = styled.div`
    display: flex;
    padding: 8px 0 8px 0;
    width: 100%;
`;

const ProjectCardBadgeWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 50%;
`;

const ProjectCardRemarksWrapper = styled.div`
    padding: 16px 0 16px 0;
    width: 100%;
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
    return <ProjectCard onClick={()=>props.actionSetProjectOpen(props.id)} {...props}>
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
        <ProjectCardMetricsWrapper>
            <Metrics title={props.metrics[0].title} value={props.metrics[0].value}/>
            <Metrics title={props.metrics[1].title} value={props.metrics[1].value}/>
            <Metrics title={props.metrics[2].title} value={props.metrics[2].value}/>
        </ProjectCardMetricsWrapper>
        <ProjectCardRemarksWrapper>
            <Remarks title={props.remark["title"]} content={props.remark["content"]}/>
        </ProjectCardRemarksWrapper>
    </ProjectCard>;
}
