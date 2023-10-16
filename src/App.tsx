import { useTranslation } from 'react-i18next';
import { RouterProvider } from "react-router-dom";
import router from './router';
import './i18n/i18n';

export default function App() {
    const { i18n } = useTranslation();
    document.body.dir = i18n.dir();

    return <RouterProvider router={router} />;
};