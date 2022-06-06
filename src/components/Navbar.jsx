import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { Pets } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyleToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "White",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
   display: "none",
   alignItems: "center",
   gap: "20px",
   [theme.breakpoints.up("sm")]:{
       display:"flex",
   }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
 }))

const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
        <StyleToolbar>
            <Typography variant="h6" sx={{ display:{xs:"none", sm:"block"} }}>
                Rohit Patel
            </Typography>
            <Pets sx={{ display:{xs:"block", sm:"none"} }}/>
            <Search><InputBase placeholder='Search..' /></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
                <Avatar sx={{width:30, height:30}} src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' onClick={(e) => setOpen(true) }/>
            </Icons>
            <UserBox onClick={(e) => setOpen(true) }>
                <Avatar sx={{width:30, height:30}} src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                <Typography variant='span'>Rohit</Typography>
            </UserBox>
        </StyleToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar