import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const UserButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#000000",
    backgroundColor: "rgba(#000000,0.0)",
    '&:hover': {
        backgroundColor: "rgba(#BE123C,1)",
    },
}));


export const UserButtonTwo = styled(Button)({
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
        backgroundColor: '#BE123C',
        
    },

});