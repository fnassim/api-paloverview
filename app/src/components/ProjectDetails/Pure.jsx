import React from 'react';
import styled from 'styled-components';
import CloseIcon from '../../Resources/icons/ic_close_48px.svg'
import StatusBadge from '../StatusBadge/StatusBadge'
import Remarks from '../Remarks/Remarks'

const ProjectDetails = styled.div`
    display: flex;
    padding: 30px 140px 20px 120px;
    width: 100%;
    height: auto;
    position:absolute;
    top:0;
    box-sizing: border-box;
    ${props => {
    console.log(props.isOpen);
    return props.isOpen ? "opacity: 1;" +
        "transition: visibility 0s 0.15s," +
        "opacity 0.3s linear; overflow: hidden; " : "opacity: 0; visibility: hidden;" +
        "transition: visibility 0s 0.15s," +
        "opacity 0.15s linear; overflow: hidden; "
}}
`

const ProjectDetailsCard = styled.div`
   padding: 20px 20px 20px 20px;
   border-radius: 2px;
   background-color: #ffffff;
   width: 100%;
`;

const CloseButtonRow = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

const CloseButton = styled.img `
  cursor: pointer;
`;

class XXX extends React.Component {
    componentDidMount() {
        //  const {actionSetProjectDetails} = this.props;
    }



    render(...props) {
        const {id, projects = []} = props;
        const currentProject = projects[id] || {
            "id": 6,
            "title": "Ok",
            "client_name": "DBS",
            "status": "good",
            "total_sprints": "5",
            "remaining_sprints": "1",
            "remaining_days": "10",
            "remark": "Je suis une remarque.",
            "status": "good"

        }
        return <ProjectDetails isOpen={this.props.isProjectOpen}>
            <ProjectDetailsCard>
                <CloseButtonRow>
                    <CloseButton src={CloseIcon} onClick={() => this.props.actionSetProjectOpen(0)}/>
                </CloseButtonRow>
            </ProjectDetailsCard>
        </ProjectDetails>;
    }
}

export default XXX
