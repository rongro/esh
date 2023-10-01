import Home from './components/Home';
import Blog from './components/Blog';
import { createBrowserRouter } from "react-router-dom";

export enum Path {
    Home = '/',
    Blog = '/blog',
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
]);

export default router;