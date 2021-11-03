import typography from './typography';
import palette from './palette';
import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
    palette,
    typography,
});

export default theme;