import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Search, Channel, Video } from '../pages';

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchTerm" element={<Search />} />
            <Route path="/channel/:id" element={<Channel />} />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
