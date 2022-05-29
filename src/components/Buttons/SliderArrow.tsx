


import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';




export const SliderArrow = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: 'none',
    lineHeight: 1.5,
    backgroundColor: 'rgba(#ffffff,0.0)',
    borderColor: '#0063cc',
    color: "#ffffff",
    '&:hover': {
        backgroundColor: 'rgba(#ffffff, 0.5)',

    },
    '& svg': {
        color: "#6B7280",
        width: "48px",
        height: "auto"
    },

});