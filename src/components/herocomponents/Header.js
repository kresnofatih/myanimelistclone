import React, {useState, useEffect} from 'react'
import './Header.css'
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import FaceIcon from '@material-ui/icons/Face';
import fire from '../../Fire';

function Header({redirectPage, handleLogout}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [userName, setUserName] = useState(fire.auth().currentUser.displayName);
    const [profilePictureUrl, setProfilePictureUrl] = useState(fire.auth().currentUser.photoURL);
    const [numOfChanges, setNumOfChanges] = useState(0);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(()=> {
        setUserName(fire.auth().currentUser.displayName);
        setProfilePictureUrl(fire.auth().currentUser.photoURL);
    }, [numOfChanges]);

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
                        <p className="heromenu_username">{userName}&nbsp;&nbsp;<PersonOutlineIcon/></p>
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
                        <p className="heromenu_nav">Feed&nbsp;&nbsp;<ClearAllIcon/></p>
                    </MenuItem>
                    <MenuItem>
                        <input 
                            className="hidden_pic_input" 
                            type="file" 
                            id="file" 
                            onChange={(e)=>{
                                handleClose();
                                const file = e.target.files[0];
                                const storageRef = fire.storage().ref();
                                const fileRef = storageRef.child('users/avatar/'+userName);
                                fileRef
                                    .put(file)
                                    .then(()=>{
                                        fileRef
                                            .getDownloadURL()
                                            .then((url)=>{
                                                fire
                                                    .auth()
                                                    .currentUser
                                                    .updateProfile({
                                                        photoURL: url
                                                    }).then(()=>{
                                                        setNumOfChanges((prev)=>{prev+=1})
                                                    })
                                            })
                                    })
                                    .catch(()=>console.log("error uploading"));
                        }}/>
                        <label for="file" className="heromenu_nav">Avatar&nbsp;&nbsp;<FaceIcon/></label>
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
