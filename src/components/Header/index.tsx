import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';
import LanguageSelector from './LanguageSelector';

const StyledHeader = styled.div`
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: center;
    padding-left: calc(7% - 12px);
    padding-right: 7%;
`;

export default function Header() {
    return (<StyledHeader>
                <Logo />
                <NavBar />
                <LanguageSelector />
        </StyledHeader>);
};
