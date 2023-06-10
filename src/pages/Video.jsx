import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { SecondLayout } from '../layouts';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Loader, Videos } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { youtubeAPI } from '../api/youtubeAPI';

const Video = () => {

    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const {videos, setVideos} = useStateContext();

    useEffect(() => {

        setVideoDetail(null);
        setVideos([]);
        
        youtubeAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]));

        youtubeAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items));

    }, [id, setVideos]);

    return (
        <SecondLayout>
            <Stack
                direction={{
                    xs: "column",
                    md: "row"
                }}
            >
                <Box flex={1} py={2} pl={2} pr={2} >
                    {!videoDetail?.snippet ? (
                        <Loader />
                    ) : (
                        <Box
                            sx={{
                                width: "100%",
                                position: "sticky",
                                top: "92px",
                            }}
                        >
                            <ReactPlayer 
                                url={`https://www.youtube.com/watch?v=${id}`} 
                                className="react-player" 
                                controls
                            />
                            <Typography variant="h6" mt="1rem" fontWeight={500} color="#f1f1f1" >
                                {videoDetail?.snippet?.title}
                            </Typography>
                            <Stack direction="row" justifyContent="space-between" py={1}>
                                <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                                    <Typography variant="body1" fontWeight={400} color="#aaaaaa" sx={{ display: "flex", alignItems: "center", gap: "4px" }} >
                                        {videoDetail?.snippet?.channelTitle}
                                        <CheckCircle fontSize='14px' />
                                    </Typography>
                                </Link>
                                <Stack direction="row" gap="20px" alignItems="center">
                                    <Typography variant="body1" color="#aaaaaa">
                                        {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                                    </Typography>
                                    <Typography variant="body1" color="#aaaaaa">
                                        {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                                    </Typography>
                                </Stack>
                            </Stack>    
                        </Box>
                    )}   
                </Box>
                <Box width={{ xs: "100%", md: "360px" }} py={{ xs: 8, md: 2 }} justifyContent="center" alignItems="center" >
                    <Videos videos={videos}  />
                </Box>
            </Stack>
        </SecondLayout>
    );
}

export default Video;