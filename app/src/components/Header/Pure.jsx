import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../Resources/images/logo-teamy-36.svg'

const Header = styled.div`
   padding: 20px;
   display: flex;
   height: 24px;
   box-shadow: 0 2px 5px rgba(0,0,0,.26);
   width: 100%;
   background-color: #303F9F;
   position: fixed;
   top: 0;
   overflow: hidden;
   position: fixed;
   z-index: 1;
`;

const Logo = styled.img`
   height : 150%;
   position: relative;
`;

//flex: 1;
//flex-wrap: wrap;

export default ({children, ...props}) => {
    return <Header>
        <Logo src={HeaderLogo}></Logo>
    </Header>;
}
