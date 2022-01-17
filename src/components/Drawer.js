import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as Checkout } from "./../assets/WebBanner&AD/NavBarIcons/Asset 34.svg";
import { ReactComponent as Notification } from "./../assets/WebBanner&AD/NavBarIcons/Asset 35.svg";
import { ReactComponent as PersonalInfo } from "./../assets/WebBanner&AD/NavBarIcons/Asset 36.svg";

function HomeIcon(props) {
  return <SvgIcon {...props}>{props.children}</SvgIcon>;
}

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon>
              <Checkout />
            </HomeIcon>
          </ListItemIcon>
          <ListItemText primary={"Check Out"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HomeIcon>
              <Notification />
            </HomeIcon>
          </ListItemIcon>
          <ListItemText primary={"Notification"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon>
              <PersonalInfo />
            </HomeIcon>
          </ListItemIcon>
          <ListItemText primary={"Personal Information"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer("top", true)}
          sx={{ mr: 2, display: { sm: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          onOpen={toggleDrawer("top", true)}
        >
          {list("top")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
