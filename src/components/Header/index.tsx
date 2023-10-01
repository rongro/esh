import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';
import LanguageSelector from './LanguageSelector';

const StyledHeader = styled.div`
    display: flex;
`;

export default function Header() {
    return (<StyledHeader>
                <Logo />
                <NavBar />
                <LanguageSelector />
        </StyledHeader>);
};
