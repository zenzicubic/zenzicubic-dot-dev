/**
 * This is the page containing the list of pages on the site.
 * @author Zenzicubic
 * @license MIT
 */
import HomePage from './pages/home/HomePage';
import LinksPage from './pages/links/LinksPage';
import GalleryPage from './pages/gallery/GalleryPage';
import ErrorPage from './pages/error/ErrorPage';

import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router';

import './index.css';

createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
</BrowserRouter>);