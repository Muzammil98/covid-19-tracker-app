import React from "react";
import MainApp from "../containers/MainApp";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appFrameContainer: {
    color: "inherit",
    background: "#302C42",
    boxShadow:
      "0px 0px 200px #0D0F1D, inset 0px 0px 200px rgba(35, 27, 27, 0.7)",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minWidth: "60vw",
    minHeight: "80vh",
    [theme.breakpoints.down("xs")]: {
      // minWidth: "100vw",
      // minHeight: "100vh",
      background: "transparent",
      boxShadow: "none",
    },
    zIndex: 0,
    opacity: "0.999",
  },
}));

const AppFrame = () => {
  const classes = useStyles();

  return (
    <div className={classes.appFrameContainer}>
      <MainApp />
    </div>
  );
};

export default AppFrame;
