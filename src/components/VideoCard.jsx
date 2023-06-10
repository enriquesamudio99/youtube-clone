import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card 
            sx={{ 
                border: "none", 
                boxShadow: "none", 
                borderRadius: "0", 
                backgroundColor: "transparent",
                width: {
                    xs: "232px",
                    xxs: "332px"
                }
            }}
        >
            <Link to={`/video/${videoId}`} style={{ display: "block", width: "100%" }} >
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url} 
                    alt={snippet?.title}
                    sx={{
                        width: "100%",
                        height: {
                            xs: "170px",
                            xxs: "187px"
                        },
                        borderRadius: "20px",
                        objectFit: "cover",
                        margin: "0 auto"
                    }}
                />
            </Link>
            <CardContent sx={{ width: "100%", padding: "1rem 0" }}>
                <Link to={`/video/${videoId}`} style={{ display: "block" }} >
                    <Typography variant="subtitle1" fontWeight={500} color="#f1f1f1" >
                        {snippet?.title.slice(0, 60)}...
                    </Typography>
                </Link>
                <Link to={`/channel/${snippet?.channelId}`} style={{ display: "block" }} >
                    <Typography variant="body2" fontWeight={400} color="#aaaaaa" sx={{ display: "flex", alignItems: "center", gap: "4px" }} >
                        {snippet?.channelTitle}
                        <CheckCircle fontSize='14px' />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );

};

export default VideoCard;