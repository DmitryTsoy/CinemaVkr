

import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { LoadingButton, LoadingButtonProps } from "@mui/lab";




export const GoToFilmBig = styled(Button)({
    marginTop:"5px",
    width: "200px",
    boxShadow: 'none',
    display: "flex",
    gap: "7px",
    justifyContent: "center",
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: 'none',
    lineHeight: 1.5,
    backgroundColor: '#BE123C',
    borderColor: '#0063cc',
    color: "#ffffff",
    '&:hover': {
        backgroundColor: '#C92950',
    },

});


export const GoToFilmBigLoad = styled(LoadingButton)<LoadingButtonProps>(({ theme }) => ({
    marginTop:"5px",
    width: "200px",
    boxShadow: 'none',
    display: "flex",
    gap: "7px",
    justifyContent: "center",
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: 'none',
    lineHeight: 1.5,
    backgroundColor: '#BE123C',
    borderColor: '#0063cc',
    color: "#ffffff",
    '&:hover': {
        backgroundColor: '#C92950',
    },


}));