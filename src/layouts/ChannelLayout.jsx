import { Box } from '@mui/material';

import { Navbar } from '../components';

const ChannelLayout = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: "100vh"
            }}
        >
            <Navbar />
            {children}
        </Box>
    )
}

export default ChannelLayout;