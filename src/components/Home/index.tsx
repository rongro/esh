import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';
import Header from '../Header';

const StyledHome = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export default function Home() {
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();

    return (<StyledHome>
                <Header />
                {t('home')}
            </StyledHome>);
};
