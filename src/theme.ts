import {extendTheme} from 'native-base';

export const customTheme = extendTheme({
  colors: {
    orangePeel: {
      50: '#FFD79A',
      100: '#FFCD81',
      200: '#FFC367',
      300: '#FFB94E',
      400: '#FFAF35',
      500: '#FFA51B',
      600: '#FF9B02',
      700: '#E68C02',
      800: '#CC7C02',
      900: '#B36D01',
    },
  },
  components: {},
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
