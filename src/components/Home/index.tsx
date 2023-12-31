import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { fadeIn } from '../../styles/animations';
import { Path } from '../../router';
import Header from '../Header';

const StyledHome = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const Background = styled.div`
    z-index: -1;
    position: absolute;
    top: 0px;
    height: 100vh;
    width: 100vw;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Video = styled.video`
    pointer-events: none;
    z-index: 1000;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 0%;
    justify-content: flex-end;
    flex-direction: column;
    height: calc(50% + 260px);
`;


const HomeTitle = styled.h3`
    opacity: 0;
    font-family: 'PloniMLv2AAA-Medium', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    color: white;
    animation: ${fadeIn} 0.5s ease-in-out 4s forwards;
    margin: 25px;
`;

const BlogLink = styled.div`
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out 5.75s forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    box-sizing: border-box;
    height: 48px;
    background: rgb(250, 247, 245);
    border-radius: 33.25px;
    cursor: pointer;
    color: #BB2649;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 25px;
`;

export default function Home() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (<StyledHome>
                <Background>
                    <Video src="https://www.esh.com/assets/cover-vid.9f721ac5.mp4" autoPlay loop muted></Video>
                </Background>
                <Header backgroundColor='transparent' />
                <HomeContainer>
                    <HomeTitle>{t('new.bank.coming')}</HomeTitle>
                    <BlogLink onClick={() => navigate(Path.Blog)}>{t('home.blog.link')}</BlogLink>
                </HomeContainer>
            </StyledHome>);
};
