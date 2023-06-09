import { useState } from 'react';
import { Box, Hidden } from '@mui/material';

import { Navbar, Sidebar } from '../components';

const MainLayout = ({ children }) => {

    const [toggleSidebar, setToggleSidebar] = useState(false);

    const handleToggleBar = (open) => (event) => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setToggleSidebar(open);

    };

    return (
        <Box
            sx={{
                minHeight: "100vh"
            }}
        >
            <Navbar 
                handleToggleBar={handleToggleBar}
                isMainLayout
            />
            <Hidden mdUp>
                <Sidebar
                    handleToggleBar={handleToggleBar}
                    variant="temporary"
                    open={toggleSidebar}
                />
            </Hidden>
            <Hidden mdDown>
                <Sidebar
                    handleToggleBar={handleToggleBar}
                    variant="persistent"
                    open={true}
                />
            </Hidden>
            <Box
                mt={{
                    xs: "68px",
                    md: "76px"
                }}
                ml={{
                    xs: 0,
                    md: "240px"
                }}
                p={2}
            >
                {children}
            </Box>
        </Box>
    )
}

export default MainLayout;