import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

import { SearchBar } from './';
import youtubeLogo from '../assets/images/youtube.svg';

const Navbar = ({ handleToggleBar, isMainLayout }) => {

    return (
        <Box>
            <AppBar 
                position="fixed"
                sx={{
                    backgroundColor: "#0F0F0F",
                    boxShadow: 0,
                    border: 0,
                    zIndex: {
                        md: 1300
                    }
                }}
            >
                <Toolbar
                    sx={{
                        justifyContent: "flex-start",
                        py: ".75rem",
                    }}
                >
                    {isMainLayout && (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ 
                                display: {
                                    xs: "inline-flex",
                                    md: "none"
                                },
                                mr: 1
                            }}
                            onClick={handleToggleBar(true)}
                        >
                            <MenuOutlined />
                        </IconButton>
                    )}
                    <Link to="/" style={{ display: "inline-block" }}>
                        <img src={youtubeLogo} alt="Youtube Logo" />
                    </Link>
                    <SearchBar />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;