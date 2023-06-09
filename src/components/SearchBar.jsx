import { Paper, IconButton } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';

const SearchBar = () => {
    
    return (
        <Paper
            component="form"
            onSubmit={() => {}}
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
                value=""
                onChange={() => {}}
            />
            <IconButton
                sx={{
                    color: "white",
                    padding: {
                        xs: ".5rem 1.25rem",
                        md: ".75rem 1.5rem"
                    }
                }}
                onClick={() => {}}
            >
                <SearchRounded />
            </IconButton>
        </Paper>
    );

}

export default SearchBar;