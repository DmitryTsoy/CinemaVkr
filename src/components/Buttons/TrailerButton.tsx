import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';




export const TrailerButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    padding: '6px 12px',
    border: 'none',
    backgroundColor: '#BE123C',
    color: "#ffffff",
    width: "348px",
    height: "66px",
    borderRadius: "30px",
    fontWeight: 500,
    lineHeight: "29px",
    textAlign: "center",

    '&:hover': {
        backgroundColor: '#C92950',
    },
    '& svg': {
        color: "#6B7280",
        width: "48px",
        height: "auto"
    },

});