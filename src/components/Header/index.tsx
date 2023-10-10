import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';
import LanguageSelector from './LanguageSelector';

const StyledHeader = styled.div`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: center;
    padding-left: calc(7% - 12px);
    padding-right: 7%;
    position: fixed;
    width: 100vw;
`;

export default function Header() {
    return (<StyledHeader>
                <Logo />
                <NavBar />
                <LanguageSelector />
        </StyledHeader>);
};
