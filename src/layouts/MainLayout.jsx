import { Box } from '@mui/material';

import { Navbar, Sidebar } from '../components';

const MainLayout = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: "100vh"
            }}
        >
            <Navbar />
            <Sidebar />
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default MainLayout;