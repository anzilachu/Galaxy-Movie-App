import { ThemeContext } from '@emotion/react';
import { dark } from '@mui/material/styles/createPalette';
import { makeStyles } from '@mui/styles'


export default makeStyles((theme) => ({
     imageLink : {
         display: 'flex',
         justifyContent:"center",
         padding: '1% 0',
    },
    image : {
        width:'50%',
    },
    links : {
        color: theme.palette.text.primary,
        textDecoration:'none',
    },
    genreImage : {
        filter : theme.palette.mode === 'dark' && 'invert(1)',
    },
}));