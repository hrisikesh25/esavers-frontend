import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Blue color for primary elements
        },
        secondary: {
            main: '#ff4081', // Pink color for secondary elements
        },
        background: {
            default: '#f4f4f4', // Light gray background for the app
            paper: '#ffffff',  // White background for cards and dialogs
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Default font family
        h3: {
            fontWeight: 600, // Bold headings
            fontSize: '2rem',
        },
        body1: {
            fontSize: '1rem', // Normal body text size
        },
        button: {
            textTransform: 'none', // Disable uppercase for buttons
        },
    },
});

export default theme;
