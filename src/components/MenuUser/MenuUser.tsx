import { Box, Divider, ListItemIcon, Menu, MenuItem, SwipeableDrawer } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/userReducer";
import { RootState } from "../../redux/store/store";
import { UserButtonTwo } from "../Buttons/HeaderButtons";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { Logout } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';






export default function MenuUser() {

    const userEmail = useSelector((state: RootState) => state.user.userData?.email);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [propState, setPropState] = useState(false);

    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const toggle = (open: boolean) => {
        setPropState(open);
    }
    
    const handleLogout = () => {
        dispatch(logout("any"));
    };


    return (<>

        <UserButtonTwo onClick={handleClick} variant="text">
            {userEmail}
        </UserButtonTwo>


        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    backgroundColor: "rgba(190, 18, 60, 1)",
                    color: "#ffffff",
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '& svg': {
                        color: "#ffffff",

                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        backgroundColor: "rgba(190, 18, 60, 1)",
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },

                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={e => toggle(true)}>
                <ListItemIcon>
                    <HistoryIcon fontSize="small" />
                </ListItemIcon>
                <p>История</p>
            </MenuItem>
            <Divider />
            <MenuItem onClick={e => handleLogout()}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                <p>Выход</p>
            </MenuItem>
        </Menu>

    </>)
}