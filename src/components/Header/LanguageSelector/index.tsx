import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Language } from '../../../i18n/consts';
import LanguageIcon from '../LanguageIcon';
import { fadeIn, fadeOut } from '../../../styles/animations';
import '../../../i18n/i18n';

const StyledLanguageSelector = styled.div`
    display: flex;
    position: relative;
`;

const LanguageIconWrapper = styled.div`
    cursor: pointer;
`;

const LanguageOptions = styled.div<{ show?: boolean; isLtr?: boolean;}>`
    position: absolute;
    top: 46px;
    display: flex;
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
    border-radius: 4px;
    background-color: white;
    padding: 10px 0;
    flex-direction: column;
    ${({ show }) => show ? 
        css`
            opacity: 1;
            animation: ${fadeIn} 0.5s ease-in-out;
        `: 
        css`
            opacity: 0;
            animation: ${fadeOut} 0.5s ease-in-out;
        `}
    ${({ isLtr }) => isLtr ? 
        css`
            right: 0;
        `: 
        css`
            left: 0;
        `}
`;

const LanguageOption = styled.div<{ selected?: boolean; }>`
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    padding: 5px 15px;
    color: #2E2F38;
    opacity: ${({ selected }) => selected ? 0.38 : 1};
    cursor: ${({ selected }) => selected ? 'default' : 'pointer'};
`;

export default function LanguageSelector() {
    const [isOptionsShown, setIsOptionsShown] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(Language.En);
    const { i18n } = useTranslation();
    
    const changeLanguage = (lng: Language) => {
        if (lng === selectedLanguage) {
            return null;
        }

        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
        setIsOptionsShown(false);
        document.body.dir = i18n.dir();
    };
      
    
    return (<StyledLanguageSelector>
                <LanguageIconWrapper onClick={() => setIsOptionsShown(!isOptionsShown)}><LanguageIcon /></LanguageIconWrapper>
                <LanguageOptions show={isOptionsShown} isLtr={selectedLanguage === Language.En}>
                    <LanguageOption selected={selectedLanguage === Language.En} onClick={() => changeLanguage(Language.En)}>English</LanguageOption>
                    <LanguageOption selected={selectedLanguage === Language.He} onClick={() => changeLanguage(Language.He)}>עברית</LanguageOption>
                </LanguageOptions>
            </StyledLanguageSelector>);
};
