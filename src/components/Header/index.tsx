import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavBar from './NavBar';
import LanguageSelector from './LanguageSelector';

type HeaderProps = {
    backgroundColor?: string,
}

const StyledHeader = styled.div<{ $backgroundColor: string}>`
    background-color: ${({$backgroundColor}) => $backgroundColor};
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

export default function Header(props: HeaderProps) {
    const { backgroundColor = 'white' } = props;

    return (<StyledHeader $backgroundColor={backgroundColor}>
                <Logo />
                <NavBar />
                <LanguageSelector />
        </StyledHeader>);
};
