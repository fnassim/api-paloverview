import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../ProjectCard';
import data from '../../Resources/static/projectsData.json';

const ProjectsList = styled.div`
   margin-top: 60px;
   padding: 20px 20px 20px 100px;
   display: flex;
   flex: 1;
   flex-wrap: wrap;
`;
class XXX extends React.Component {
    componentDidMount () {
        const {actionSetProjectsList} = this.props
        actionSetProjectsList(data)
    }

    render () {
        const {projects = []} = this.props
        return <ProjectsList>
            {projects.map(item => (
                <ProjectCard metrics={[{title: "Current sprint", value: "2"},
                    {title: "Total sprints", value: "5"},
                    {title: "Remaining days", value: "15"}]}
                             remark={{
                                 title: "Remarks:",
                                 content: "The project is doing fine and the client is really happy. But the thing is that we'll probably need one more developer because the next sprint is going to be a little bit more tough than expected."
                             }}
                             status={item.status} subTitle={item.client_name}
                             title={item.title} totalSprints="5" currentSprint="2"/>
            ))}
        </ProjectsList>;
    }
}

export default XXX;