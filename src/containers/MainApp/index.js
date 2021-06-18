import React from "react";
import { IconButton, Button, Select } from "@material-ui/core";
import DeathSvg from "../../assets/DeathSvg";
import GermSvg from "../../assets/GermSvg";
import RecoverySvg from "../../assets/RecoverySvg";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px",
  },
  infoMainContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      // margin: "20px",
    },
  },
  infoContainer: {
    color: "inherit",
    background: "#302C42",
    boxShadow: "inset 0px 0px 200px rgba(35, 27, 27, 0.7)",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    alignItems: "flex-start",
    minWidth: "250px",
    minHeight: "160px",
    marginRight: "20px",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      // minWidth: "500px",
      // minHeight: "600px",
      // background: "transparent",
      marginBottom: "20px",
      marginRight: "0px",
      boxShadow: "none",
    },
    zIndex: 0,
    opacity: "0.999",
    position: "relative",
    overflow: "hidden",
    "& div": {
      zIndex: 2,
    },
    "& svg": {
      zIndex: 1,
      position: "absolute",
      top: 0,
      right: 0,
    },
  },
  svg: {
    transform: "scale(3)",
    "&.infected": {
      fill: "#B181FF",
      opacity: 0.1,
    },
    "&.recovered": {
      fill: "#83FF81",
      opacity: 0.1,
    },
    "&.deaths": {
      fill: "#FF8181",
      opacity: 0.1,
    },
  },
  lastUpdated: {
    fontWeight: "300",
    color: "#9F9F9F",
  },
  title: {
    fontWeight: "500",
  },
  casesNumber: {
    fontWeight: "500",
    "&.infected": {
      color: "#B181FF",
    },
    "&.recovered": {
      color: "#83FF81",
    },
    "&.deaths": {
      color: "#FF8181",
    },
  },
  para: {
    fontWeight: "300",
    color: "#9F9F9F",
  },
}));
const MainApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 style={{ marginBottom: "30px", fontWeight: "300" }}>
        Covid-19 Cases
      </h3>
      <div className={classes.infoMainContainer}>
        <div className={classes.infoContainer}>
          <GermSvg className={classes.svg + " infected"} />
          <div>
            <h6 className={classes.lastUpdated}>Last updated: Feb 27, 2021</h6>
            <h3 className={classes.title}>Infected</h3>
          </div>
          <div>
            <h1 className={classes.casesNumber + " infected"}>945,123</h1>
            <h6 className={classes.para}>
              Total no. of infected cases globally
            </h6>
          </div>
        </div>
        <div className={classes.infoContainer}>
          <RecoverySvg className={classes.svg + " recovered"} />

          <div>
            <h6 className={classes.lastUpdated}>Last updated: Feb 27, 2021</h6>
            <h3 className={classes.title}>Recovered</h3>
          </div>
          <div>
            <h1 className={classes.casesNumber + " recovered"}>945,123</h1>
            <h6 className={classes.para}>
              Total no. of recovered cases globally
            </h6>
          </div>
        </div>
        <div className={classes.infoContainer}>
          <DeathSvg className={classes.svg + " deaths"} />

          <div>
            <h6 className={classes.lastUpdated}>Last updated: Feb 27, 2021</h6>
            <h3 className={classes.title}>Deaths</h3>
          </div>
          <div>
            <h1 className={classes.casesNumber + " deaths"}>945,123</h1>
            <h6 className={classes.para}>Total no. of deaths cases globally</h6>
          </div>
        </div>
      </div>
      <Select placeholder="Select a country" title="Select a country" />
      <div className={classes.infoContainer}>
        <p>To see country wise cases, please select a country</p>
      </div>
    </div>
  );
};

export default MainApp;
