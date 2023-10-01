import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Language } from '../../../i18n/consts';
import '../../../i18n/i18n';

const StyledLanguageSelector = styled.div`
    display: flex;
`;

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    
    const changeLanguage = (lng: Language) => { 
        i18n.changeLanguage(lng)
        document.body.dir = i18n.dir();
    };
      
    
    return (<StyledLanguageSelector>
                <button onClick={() => changeLanguage(Language.En)}>en</button>
                <button onClick={() => changeLanguage(Language.He)}>he</button>
            </StyledLanguageSelector>);
};
