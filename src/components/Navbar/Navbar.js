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
    <div>
      <AppBar position = "static"> 
      {/* override position fixed with position static so it will push down content instead of appearing on top of it I hope? */}
      {/* it worked, glorious victory */}
      {/* i didn't remember that, I just saw it in some working code from my bootcamp group project from last year and tried it */}
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
