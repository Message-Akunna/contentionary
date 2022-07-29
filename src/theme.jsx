import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#FFF3E4',
      main: '#F77E23',
      contrastText: '#fff',
    },
    secondary: {
      light: '#CDD8FF',
      alt: '#5B72EE',
      main: '#2F327D',
      dark: '#252641',
      contrastText: '#fff',
    },
    accent: {
      main: '#23BDEE',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontFamily: "Nunito Sans",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Poppins",
      fontWeight: 700
    },
    h3: {
      fontFamily: "Poppins",
      fontWeight: 700
    },
    h4: {
      fontFamily: "Poppins",
      fontWeight: 600
    },
    h5: {
      fontFamily: "Poppins",
      fontWeight: 600
    },
    h6: {
      fontFamily: "Poppins",
      fontWeight: 500
    },
    body: {
      fontFamily: "Poppins",
      fontWeight: 400
    },
    fontFamily: [
      '"Poppins"',
      'sans-serif',
    ].join(','),
  }
});

export default theme;