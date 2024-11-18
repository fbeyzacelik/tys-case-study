// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderRadius: 8,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '15px',
      lineHeight: '22.5px',
    },
    projectTitle: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '15px',
      lineHeight: '22.5px',
      color: '#495057',
    },
  },
});

export const theme = {
  colors: {
    primary: '#3E1C96',
    white: '#FFFFFF',
    text: {
      primary: '#495057',
    },
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
    }
  },
  layout: {
    sidebarWidth: '252px',
    navbarHeight: '64px',
    contentPadding: '24px'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.1)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    variants: {
      projectTitle: {
        fontSize: '15px',
        fontWeight: 700,
        lineHeight: '22.5px',
        color: '#495057',
      }
    }
  }
};