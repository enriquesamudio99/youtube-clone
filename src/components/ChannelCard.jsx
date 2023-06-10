import { Link } from 'react-router-dom';
import { Typography, Box, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail, isChannelDetail = false }) => {

    return (
        <Box
            sx={{
                boxShadow: "none",
                width: {
                    xs: "100%",
                    xxs: "332px"
                },
                height: "327px"
            }}
        >
            <Link to={`${!isChannelDetail ? `/channel/${channelDetail?.id?.channelId}` : "#" }`} style={{ display: "block", width: "100%", height: "100%" }}>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        padding: "0"
                    }}
                >
                    <CardMedia 
                        image={channelDetail?.snippet?.thumbnails?.high?.url}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            width: "160px",
                            height: "160px",
                            borderRadius: "50%"
                        }}
                    />
                    <Typography 
                        variant="h6"
                        sx={{
                            color: "white",
                            display: "flex", 
                            alignItems: "center",
                            gap: "8px",
                            mt: "1rem"
                        }}
                    >
                        {channelDetail?.snippet?.title}
                        {channelDetail?.snippet && <CheckCircle fontSize='24px' />}
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography 
                            variant="body2"
                            sx={{
                                color: "#aaaaaa",
                                mt: "4px"
                            }}
                        >
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
    
};

export default ChannelCard;