import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.progress`
  margin: 16px 0 16px 0;
   width:              100%;
  border:             none;
  height:             5px;
  display:            block;
  appearance:         none;
  -webkit-appearance: none;
  &::-webkit-progress-bar {
    background-color: #E1F5FE;
  }
  &::-webkit-progress-value {
    background-color: #039BE5;
  }
`;

export default ({children, ...props}) => {
    return <ProgressBar {...props} max={props.max} value={props.value}>
    </ProgressBar>
};
