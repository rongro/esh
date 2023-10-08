import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';
import Header from '../Header';
import BlogPostItem from './BlogPostItem';
import { getBlogPosts } from '../../api/blog';


const StyledBlog = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const BlogContainer = styled.div`
    padding-top: 72px;
`;

export default function Blog() {
    const { i18n } = useTranslation();
    document.body.dir = i18n.dir();

    const { posts } = getBlogPosts();

    return (<StyledBlog>
                <Header />
                <BlogContainer>
                    {posts.map(post => <BlogPostItem key={post.id} post={post} />)}
                </BlogContainer>
            </StyledBlog>);
};