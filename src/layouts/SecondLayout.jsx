import { Box } from '@mui/material';

import { Navbar } from '../components';

const SecondLayout = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: "100vh"
            }}
        >
            <Navbar 
                handleToggleBar={() => {}}
                isMainLayout={false}
            />
            <Box
                mt={{
                    xs: "68px",
                    md: "76px"
                }}
                p={2}
            >
                {children}
            </Box>
        </Box>
    )
}

export default SecondLayout;