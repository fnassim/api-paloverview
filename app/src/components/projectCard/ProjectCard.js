import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.section`
	padding: 4em;
	background: #808080;
	height: 200px;
	width: 250px;
`;

export default ({children, ...props}) => {
    return <ProjectCard {...props}></ProjectCard>;
};
