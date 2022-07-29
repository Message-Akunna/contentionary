import React, { useState } from "react";
// 
import { Link } from 'react-router-dom';
// 
import {
  Box,
  List,
  Drawer,
  Divider,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ContentionaryLogo from "../../assets/images/logo/logo.svg";

const pages = ["Course", "Exams", "About Us", "Login", "Signup"];
function AppDrawer (){
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <Box sx={{ px: 2, pb: 1, pt: 3 }}>
            <img
              src={ContentionaryLogo}
              alt="Contentionary"
              height="40"
              width="auto"
              loading="lazy"
            />
          </Box>
          <Divider />
          <List>
            {pages.map((page, index) => (
              <ListItemButton component={Link} to={`/#${page}`}  key={index}>
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default AppDrawer;