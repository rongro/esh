import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Path } from '../../../router';
import '../../../i18n/i18n';

const StyledNavBar = styled.div`
    display: flex;
    width: 100%;
`;

const NavBarItem = styled.div<{ $selected?: boolean; }>`
    font-size: 14px;
    font-weight: 600;
    display: flex;
    margin: 25px 26px 16px;
    transition: opacity 0.5s;
    ${({ $selected }) => $selected ?
    css`
        color: #2E2F38;
    `:
    css`
        color: #6A6D82;
        cursor: pointer;
        &:hover {
            opacity: 50%;
        }
    `};
`;

export default function NavBar() {
    const { t } = useTranslation();
	const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === Path.Home;

    return (<StyledNavBar>
                <NavBarItem $selected={isHome} onClick={() => navigate(Path.Home)}>{t('home')}</NavBarItem>
                <NavBarItem $selected={!isHome} onClick={() => navigate(Path.Blog)}>{t('blog')}</NavBarItem>
        </StyledNavBar>);
};
