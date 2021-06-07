import React from "react";

//import mui core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

// import mui icons
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography variant="h6">Home</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
