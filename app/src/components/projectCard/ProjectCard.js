import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 200ms cubic-bezier(.25,.8,.25,1);
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: 300px;
    margin: 1rem;
    position: relative;
    width: 300px;
    cursor: pointer;
    &:hover {
        -webkit-transition: all 100ms ease-in;
        -webkit-transform: scale(1.01);
        box-shadow:  0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
   }
`;

const ProjectCardTitle = styled.div`
    font-weight: bold;
    color : #000000;
    font-size: 16px;
`;

// const ProjectCardLastUpdated = styled.div`
//     font-weight: bold;
//     color : #ff0000;
// `;

export default ({children, ...props}) => {
    return <ProjectCard {...props}>
        <ProjectCardTitle>{props.title}</ProjectCardTitle>
    </ProjectCard>;
};
