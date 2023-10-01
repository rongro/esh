import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Post } from '../../../api/blog';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../../router';

// I did not have enough time to finish the layout properly

type BlogPostItemProps = {
    post: Post,
}

const StyledPost = styled.div`
    color: #2E2F38;
    margin-bottom: 20px;
    padding: 20px;
    cursor: pointer;
`;

const PostHeader = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 5px;
`;

const PostTitle = styled.div`
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
`;

const PostDescription = styled.div`
    font-size: 14px;
    line-height: 20px;
`;

const PostedBy = styled.div`
    display: inline-block;
`;

const PostDate = styled.div`
    display: inline-block;
`;

export default function BlogPostItem(props: BlogPostItemProps) {
    const {id, postedBy, date, title, description } = props.post;

    const { t } = useTranslation();
    const navigate = useNavigate();

    return <StyledPost onClick={() => navigate(`${Path.Blog}/${id}`)}>
                <PostHeader>
                    <PostDate>{t(date)}</PostDate> · <PostedBy>{t(postedBy)}</PostedBy>
                </PostHeader>
                <PostTitle>{t(title)}</PostTitle>
                <PostDescription>{t(description)}</PostDescription>
    </StyledPost>

};
