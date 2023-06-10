import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { MainLayout } from '../layouts';

import { Videos } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { youtubeAPI } from '../api/youtubeAPI';

const Home = () => {

    const { selectedCategory, videos, setVideos } = useStateContext();

    useEffect(() => {

        setVideos([]);
        
        youtubeAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items));

    }, [selectedCategory, setVideos]);


    return (
        <MainLayout>
            <Typography
                variant="h4"
                fontWeight={500}
                pt={{
                    xs: 4,
                    md: 0
                }}
                px={2}
                mb={4}
                ml={{
                    xs: 0,
                    md: 2
                }}
            >
                {selectedCategory} Videos
            </Typography>
            <Videos videos={videos} />
        </MainLayout>
    );
}

export default Home;