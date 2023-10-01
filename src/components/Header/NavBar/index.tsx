import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../../../i18n/i18n';

const StyledNavBar = styled.div`
    display: flex;
`;

const NavBarItem = styled.div`
    display: flex;
`;

export default function NavBar() {
    const { t } = useTranslation();

    return (<StyledNavBar>
                <NavBarItem>{t('home')}</NavBarItem>
                <NavBarItem>{t('blog')}</NavBarItem>
        </StyledNavBar>);
};
