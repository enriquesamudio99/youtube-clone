import { ThemeProvider } from '@mui/material/styles';
import { theme } from './';

export const AppTheme = ({ children }) => {

    return (
        <ThemeProvider theme={theme} >
            {children}
        </ThemeProvider>
    )

}