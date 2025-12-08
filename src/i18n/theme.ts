import { createTheme } from '@mui/material/styles';

export const getTheme = (locale: string) => {
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return createTheme({
    direction,
    typography: {
      fontFamily: locale === 'ar' ? 'Tajawal, Arial, sans-serif' : 'Roboto, Arial, sans-serif',
    },
  });
};
