import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';
import Header from '../Header';


const StyledBlog = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export default function Blog() {
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();

    return (<StyledBlog>
                <Header />
                {t('blog')}
            </StyledBlog>);
};