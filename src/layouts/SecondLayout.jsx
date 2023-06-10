import { Box } from '@mui/material';

import { Navbar } from '../components';

const SecondLayout = ({ children }) => {
    return (
        <Box>
            <Navbar 
                handleToggleBar={() => {}}
                isMainLayout={false}
            />
            <Box
                mt={{
                    xs: "68px",
                    md: "76px"
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

export default SecondLayout;