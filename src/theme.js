import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#3f51b5',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;