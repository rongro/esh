import React from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Post } from '../../../api/blog';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../../router';

type BlogPostItemProps = {
    post: Post,
}

const PostImage = styled.div<{ $image: string; }>`
    width: 100%;
    height: 100%;
    background-image: url('${({ $image }) => $image}');
    background-size: cover;
    background-none;
`;


const StyledPost = styled.div`
    color: #2E2F38;
    cursor: pointer;
    display: flex;
    padding: 20px 15%;


    &:hover ${PostImage} {
        transform: scale(1.5);
        transition: transform 6s;
    }
`;

const PostDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostImageWrapper = styled.div`
    width: 110px;
    height: 110px;
    margin: 0 20px;
    overflow: hidden;
    border-radius: 50%;
    flex-shrink: 0;
`;

const PostHeader = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 5px;
    color: #6A6D82;
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
    const {id, date, image } = props.post;

    const { t } = useTranslation();
    const navigate = useNavigate();

    return <StyledPost onClick={() => navigate(`${Path.Blog}/${id}`)}>
                <PostImageWrapper>
                    <PostImage $image={image} />
                </PostImageWrapper>
                <PostDetails>
                    <PostHeader>
                        <PostDate>{t(date)}</PostDate> · <PostedBy>{t(`blog.post.posted.by.${id}`)}</PostedBy>
                    </PostHeader>
                    <PostTitle>{t(`blog.post.title.${id}`)}</PostTitle>
                    <PostDescription>{t(`blog.post.description.${id}`)}</PostDescription>
                </PostDetails>
    </StyledPost>

};
