export interface Post {
    id: string,
    date: string,
    image: string,
};

const posts = [
    {
        id: 'kira-is-joining-esh-announcing-eshx',
        date: '17/04/2023',
        image: 'https://www.esh.com/assets/kira-blog-cover.18be95ec.jpg',
    },
    {
        id: 'the-equal-bank-board',
        date: '20/08/2023',
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
