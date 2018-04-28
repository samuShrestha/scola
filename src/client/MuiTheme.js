import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

const theme = {
    palette: {
        primary: blue,
        /*     secondary: {
                //light: palette.secondary.A200,
                //main: palette.secondary.A400,
                //dark: palette.secondary.A700,
                //contrastText: getContrastText(palette.secondary.A400),
            }, */
        /* error: {
            //light: palette.error[300],
            main: palette.error[500],
            //dark: palette.error[700],
            //contrastText: getContrastText(palette.error[500]),
        }, */
    },
};

const MuiTheme = createMuiTheme(theme);

export default MuiTheme;