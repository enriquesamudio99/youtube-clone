import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';

const SearchBar = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");    

    const handleSubmit = (e) => {

        e.preventDefault();

        if (searchTerm.trim().length > 0) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm("");
        }

    }

    const handleSearchTerm = (e) => setSearchTerm(e.target.value);
    
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                margin: {
                    xs: "0 0 0 auto",
                    md: "0 auto"
                },
                borderRadius: "40px",
                backgroundColor: "#121212",
                border: "1px solid #303030",
                boxShadow: "none",
                display: "flex",
                alignItems: "center"
            }}
        >
            <input
                className="search-input"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchTerm}
            />
            <IconButton
                sx={{
                    color: "white",
                    padding: {
                        xs: ".5rem 1.25rem",
                        md: ".75rem 1.5rem"
                    }
                }}
                onClick={handleSubmit}
            >
                <SearchRounded />
            </IconButton>
        </Paper>
    );

}

export default SearchBar;