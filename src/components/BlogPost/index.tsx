import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getBlogPost } from "../../api/blog";
import { BlogPostItemProps } from '../Blog/BlogPostItem';
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
    padding: 144px 15% 20px;
`;

const Back = styled.div`
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    margin-bottom: 26px;
`;

const PostTitle = styled.div`
    font-size: 36px;
    line-height: 28px;
    margin-bottom: 20px;
`;

const PostInfo = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
    color: #6A6D82;
`;

const PostContent = styled.div`
    font-size: 14px;
    line-height: 20px;
`;

const PostImage = styled.img`
    width: 100%;
    border-radius: 16px;
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
    const { post } = useLoaderData() as BlogPostItemProps;
    const { id, date, image } = post;

    return <StyledPost>
                <Header />
                <PostWrapper>
                    <Back onClick={() => navigate(-1)}>{t('back')}</Back>
                    <PostTitle>{t(`blog.post.title.${id}`)}</PostTitle>
                    <PostInfo>
                        <PostDate>{t(date)}</PostDate> · <PostedBy>{t(`blog.post.posted.by.${id}`)}</PostedBy>
                    </PostInfo>
                    <PostImage src={image} />
                    <PostContent dangerouslySetInnerHTML={{ __html: t(`blog.post.content.${id}`) }} />
                </PostWrapper>
    </StyledPost>

};
