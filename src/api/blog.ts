export interface Post {
    id: string,
    postedBy: string,
    date: string,
    title: string,
    description: string,
    image: string,
};

const posts = [
    {
        id: 'kira-is-joining-esh-announcing-eshx',
        postedBy: 'blog.post.posted.by.1',
        date: '17/04/2023',
        title: 'blog.post.title.1',
        description: 'blog.post.description.1',
        image: 'https://www.esh.com/assets/kira-blog-cover.18be95ec.jpg',
    },
    {
        id: 'the-equal-bank-board',
        postedBy: 'blog.post.posted.by.2',
        date: '20/08/2023',
        title: 'blog.post.title.2',
        description: 'blog.post.description.2',
        image: 'https://www.esh.com/assets/all-board-image.1aa24bed.jpg',
    },
];

export function getBlogPosts() {
    // Mock for server response
    return {
        posts,
    }
}

export function getBlogPost(id: string) {
    // Mock for server response
    return posts.filter(post => post.id === id)[0];
}