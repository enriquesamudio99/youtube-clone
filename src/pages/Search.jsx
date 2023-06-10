import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { SecondLayout } from '../layouts';

import { youtubeAPI } from '../api/youtubeAPI';
import { useStateContext } from '../contexts/ContextProvider';
import { Videos } from '../components';

const Search = () => {

    const { searchTerm } = useParams();
    const {videos, setVideos} = useStateContext();

    useEffect(() => {
        
        setVideos([]);

        youtubeAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items));

    }, [searchTerm, setVideos]);

    return (
        <SecondLayout>
            <Typography
                variant="h4"
                fontWeight={500}
                pt={4}
                px={2}
                mb={4}
                ml={{
                    xs: 0,
                    md: 2
                }}
            >
                Search Results for: {searchTerm} Videos
            </Typography>
            <Videos videos={videos} />
        </SecondLayout>
    )
}

export default Search