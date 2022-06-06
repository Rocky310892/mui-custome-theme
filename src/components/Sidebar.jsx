import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import { AccountBox, Article, Group, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }}}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
              <ListItemIcon>
                <Article/>
              </ListItemIcon>
              <ListItemText primary="page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simle-list'>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simle-list'>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simle-list'>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Freinds" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simle-list'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simle-list'>
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simle-list'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar