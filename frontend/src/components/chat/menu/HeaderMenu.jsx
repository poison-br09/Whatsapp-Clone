import {useState} from 'react';
import {MoreVert} from '@mui/icons-material';
import {Menu, MenuItem, styled} from '@mui/material';

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 10px 20px;
    color: #4A4A4A4;
`

const HeaderMenu = ({setOpenDrawer}) => {

    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </>
    )
}

export default HeaderMenu;