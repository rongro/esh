import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getBlogPost, Post } from "../../api/blog";
import Header from '../Header';

type Props = {
    params: {
        postId: string,
    }
}

export function loader(props: Props) {
  const post = getBlogPost(props.params.postId);
  return { post };
};

const StyledPost = styled.div`
    color: #2E2F38;
`;

const PostWrapper = styled.div`
    margin-bottom: 20px;
    padding: 20px;
`;

const Back = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin: 0 20px;
    cursor: pointer;
`;

const PostTitle = styled.div`
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
`;

const PostInfo = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 5px;
`;

const PostContent = styled.div`
    font-size: 14px;
    line-height: 20px;
`;

const PostImage = styled.img`
    width: 100%;
`;

const PostedBy = styled.div`
    display: inline-block;
`;

const PostDate = styled.div`
    display: inline-block;
`;

export default function BlogPost() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { post } = useLoaderData() as { post: Post };

    const {postedBy, date, title, description, image } = post;

    return <StyledPost>
                <Header />
                <Back onClick={() => navigate(-1)}>{t('back')}</Back>
                <PostWrapper>
                <PostTitle>{t(title)}</PostTitle>
                    <PostInfo>
                        <PostDate>{t(date)}</PostDate> · <PostedBy>{t(postedBy)}</PostedBy>
                    </PostInfo>
                    <PostImage src={image} />
                    <PostContent>{t(description)}</PostContent>
                </PostWrapper>
    </StyledPost>

};
