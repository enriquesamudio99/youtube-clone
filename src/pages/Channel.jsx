import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { SecondLayout } from '../layouts';
import { ChannelCard, Videos } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { youtubeAPI } from '../api/youtubeAPI';

const Channel = () => {

    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const {videos, setVideos} = useStateContext();

    useEffect(() => {

        setChannelDetail(null);
        setVideos([]);
        
        youtubeAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));

        youtubeAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items));

    }, [id, setVideos]);

    return (
        <SecondLayout>
            <Box display="flex" flexDirection="column" alignItems="center">
                <div 
                    style={{
                        width: "100%",
                        height:'300px',
                        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                    }}
                />
                <Box sx={{ mt: "-130px", position: "relative", zIndex: "15" }}>
                    <ChannelCard channelDetail={channelDetail} isChannelDetail={true} />
                </Box>
            </Box>
            <Videos videos={videos} />
        </SecondLayout>
    );
}

export default Channel;