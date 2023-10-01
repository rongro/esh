import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost, {
  loader as blogPostLoader,
} from './components/BlogPost';
import { createBrowserRouter, LoaderFunction } from "react-router-dom";

export enum Path {
    Home = '/',
    Blog = '/blog',
    BlogPost = '/blog/:postId',
}

const router = createBrowserRouter([
  {
    path: Path.Home,
    element: <Home />,
  },
  {
    path: Path.Blog,
    element: <Blog />,
  },
  {
    path: Path.BlogPost,
    element: <BlogPost />,
    loader: blogPostLoader as unknown as LoaderFunction<any>,
  },
]);

export default router;