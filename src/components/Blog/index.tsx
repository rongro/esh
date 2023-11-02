import styled from 'styled-components';
import Header from '../Header';
import BlogPostItem from './BlogPostItem';
import { getBlogPosts } from '../../api/blog';


const StyledBlog = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const BlogContainer = styled.div`
    padding-top: 144px;
`;

export default function Blog() {
    const { posts } = getBlogPosts();

    return (<StyledBlog>
                <Header />
                <BlogContainer>
                    {posts.map(post => <BlogPostItem key={post.id} post={post} />)}
                </BlogContainer>
            </StyledBlog>);
};