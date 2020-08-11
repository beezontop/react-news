import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import "./navmenu.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

let id = Math.random() * 100000000;

export default function NavMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    right: false,
    left: false,
    bottom: false,
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
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="guest-info">
          <div className="material-icons">face</div>
          <div>
            <p className="guest-title">guest</p>
            <p className="guest-id">
              ID : <span>guest{id.toFixed()}</span>
            </p>
          </div>
        </div>
        <Button variant="contained" color="secondary">
          LOGIN
        </Button>
        <div class="menu-list d-flex flex-column">
          <a href="#/action-1">Notifications</a>
          <a href="#/action-2">Settings</a>
          <a href="#/action-3">Report a problem</a>
        </div>
      </List>
      <Divider />
      <div class="menu-list d-flex flex-column">
        <a href="#/action-4">About MomDaily</a>
        <a href="#/action-5">Privacy</a>
      </div>
    </div>
  );

  return (
    <div className="nav-menu">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <span className="material-icons">menu</span>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
