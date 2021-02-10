import React, {useState} from 'react'
import './Header.css'
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header({userName, profilePictureUrl, redirectPage, handleLogout}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className="heroheader">
            <div className="heroheadercontainer">
                <h1 className="heroheaderlogo">malc.</h1>
                <button className="heromenu" aria-describedby={id} variant="contained" onClick={handleClick}>
                    <img className="heroava" src={profilePictureUrl}/>  
                </button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                >
                    <MenuItem onClick={handleClose}>
                        <p className="heromenu_username">{userName}&nbsp;&nbsp;<AccountCircleIcon/></p>
                    </MenuItem>
                    <MenuItem onClick={()=>{
                        redirectPage('Browse');
                        handleClose();
                    }}>
                        <p className="heromenu_nav">Browse&nbsp;&nbsp;<SearchIcon/></p>
                    </MenuItem>
                    <MenuItem onClick={()=>{
                        redirectPage('Feed');
                        handleClose();
                    }}>
                        <p className="heromenu_nav">Feed&nbsp;&nbsp;<DashboardIcon/></p>
                    </MenuItem>
                    <MenuItem onClick={()=>{
                        handleClose();
                        handleLogout();
                    }}>
                        <p className="heromenu_nav">Logout&nbsp;&nbsp;<ExitToAppIcon/></p>
                    </MenuItem>
                </Popover>
            </div>
        </div>
    )
}

export default Header
