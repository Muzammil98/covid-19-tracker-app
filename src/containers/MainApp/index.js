import React, { useEffect, useState } from "react";
import { IconButton, Button, Select, MenuItem } from "@material-ui/core";
import DeathSvg from "../../assets/DeathSvg";
import GermSvg from "../../assets/GermSvg";
import RecoverySvg from "../../assets/RecoverySvg";
import CountUp from "react-countup";
import { MONTHS } from "../../utils/misc";
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
  countrySelect: {
    color: "#8E8E8E",
    marginBottom: "20px",
    marginLeft: "4px",
    width: "200px",
    "& .MuiSelect-selectMenu": {
      fontSize: "12px",
      color: "#8E8E8E",
      "& ::placeholder": {
        color: "#8E8E8E",
        fontSize: "12px",
      },
    },
    "& svg": {
      color: "#8E8E8E",
    },
    "&.MuiInput-root:before": {
      borderBottomColor: "#585858 !important",
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

const CountAnimated = ({ value }) => {
  return (
    <CountUp
      // start={-875.039}
      end={value}
      duration={3}
      separator=","
      // decimals={4}
      decimal=","
      delay={0}
    >
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  );
};

const MainApp = () => {
  const classes = useStyles();

  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [globalLastUpdate, setGlobalLastUpdate] = useState("");

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api")
      .then((res) => res.json())
      .then((res) => {
        let confirmedCases, recoveredCases, deathCases, date, day, month, year;
        confirmedCases = res.confirmed.value;
        recoveredCases = res.recovered.value;
        deathCases = res.deaths.value;

        day = new Date(res.lastUpdate).getDate();
        month = new Date(res.lastUpdate).getMonth();
        month = MONTHS[month];
        year = new Date(res.lastUpdate).getFullYear();

        date = `${month} ${day}, ${year}`;

        console.log(confirmedCases, recoveredCases, deathCases, date);

        setGlobalLastUpdate(date);
        setConfirmed(confirmedCases);
        setRecovered(recoveredCases);
        setDeaths(deathCases);

      })
      .catch((err) => console.error(err));
  }, []);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.root}>
      <h3 style={{ marginBottom: "30px", fontWeight: "300" }}>
        Covid-19 Cases
      </h3>

      <div className={classes.infoMainContainer}>
        <div className={classes.infoContainer}>
          <GermSvg className={classes.svg + " infected"} />
          <div>
            <h6 className={classes.lastUpdated}>Last updated: {globalLastUpdate}</h6>
            <h3 className={classes.title}>Infected</h3>
          </div>
          <div>
            <h1 className={classes.casesNumber + " infected"}>
              <CountAnimated value={confirmed} />
            </h1>
            <h6 className={classes.para}>
              Total no. of infected cases globally
            </h6>
          </div>
        </div>
        <div className={classes.infoContainer}>
          <RecoverySvg className={classes.svg + " recovered"} />

          <div>
            <h6 className={classes.lastUpdated}>Last updated: {globalLastUpdate}</h6>
            <h3 className={classes.title}>Recovered</h3>
          </div>
          <div>
            <h1 className={classes.casesNumber + " recovered"}>
              <CountAnimated value={recovered} />
            </h1>
            <h6 className={classes.para}>
              Total no. of recovered cases globally
            </h6>
          </div>
        </div>
        <div className={classes.infoContainer}>
          <DeathSvg className={classes.svg + " deaths"} />

          <div>
            <h6 className={classes.lastUpdated}>Last updated: {globalLastUpdate}</h6>
            <h3 className={classes.title}>Deaths</h3>
          </div>
          <div>
            <h1 className={classes.casesNumber + " deaths"}>
              <CountAnimated value={deaths} />
            </h1>
            <h6 className={classes.para}>Total no. of deaths cases globally</h6>
          </div>
        </div>
      </div>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        className={classes.countrySelect}
      >
        <MenuItem value="" disabled>
          Select a country
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      <div className={classes.infoContainer}>
        <p>To see country wise cases, please select a country</p>
      </div>
    </div>
  );
};

export default MainApp;
