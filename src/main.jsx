/**
 * This is the page containing the list of pages on the site.
 * @author Zenzicubic
 * @license MIT
 */

import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router';

// Import different page's components
import ErrorPage from './pages/error/ErrorPage';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const LinksPage = lazy(() => import('./pages/links/LinksPage'));
const GalleryPage = lazy(() => import('./pages/gallery/GalleryPage'));

import './index.css';

createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <Routes>
        <Suspense fallback={<p>Loading...</p>}>
            <Route index element={<HomePage />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
        </Suspense>
        <Route path="*" element={<ErrorPage />} />
    </Routes>
</BrowserRouter>);