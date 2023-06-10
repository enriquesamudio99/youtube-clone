import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { useStateContext } from '../contexts/ContextProvider';
import { categories } from '../utils/constants';

const Sidebar = ({ handleToggleBar, variant, open }) => {

    const { selectedCategory, handleSelectedCategory } = useStateContext();

    return (
        <Drawer
            anchor="left"
            open={open}
            variant={variant}
            onClose={handleToggleBar(false)}
            PaperProps={{
                sx: {
                    background: "#0F0F0F",
                    border: 0,
                    boxShadow: 0,
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                    overflowX: "hidden"
                }
            }}
        >
            <Box
                sx={{
                    width: 240,
                    p: "0 12px"
                }}
                role="presentation"
                onClick={handleToggleBar(false)}
                onKeyDown={handleToggleBar(false)}
            > 
                <List
                    sx={{
                        padding: 0,
                        mt: {
                            xs: "12px",
                            md: "88px"
                        },
                        mb: "12px",
                    }}
                >
                    {categories.map((categorie) => (
                        <ListItem 
                            key={categorie.name} 
                            disablePadding
                            sx={{
                                color: "#FFFFFF",
                                fontSize: "1rem",
                                lineHeight: "1.25rem",
                                borderRadius: "10px",
                                textTransform: "capitalize",
                                overflow: "hidden",
                                backgroundColor: selectedCategory === categorie.name 
                                        ? "#272727" 
                                        : "transparent",
                                "&:hover": {
                                    backgroundColor: selectedCategory === categorie.name 
                                        ? "#3D3D3D" 
                                        : "#272727"
                                }
                            }}
                        >
                            <ListItemButton
                                onClick={() => handleSelectedCategory(categorie.name)}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: "#F1F1F1"
                                    }}
                                >
                                    {categorie.icon}
                                </ListItemIcon>
                                <ListItemText 
                                    primary={categorie.name} 
                                    primaryTypographyProps={{
                                        sx: {
                                            fontWeight: selectedCategory === categorie.name 
                                                ? "500" 
                                                : "400",
                                            color: "#F1F1F1"
                                        }
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );

}

export default Sidebar;