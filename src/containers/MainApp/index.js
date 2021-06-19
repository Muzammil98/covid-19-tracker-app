import React, { useEffect, useState } from "react";
import { IconButton, Button, Select, MenuItem } from "@material-ui/core";
import DeathSvg from "../../assets/DeathSvg";
import GermSvg from "../../assets/GermSvg";
import RecoverySvg from "../../assets/RecoverySvg";
import CountUp from "react-countup";
import { MONTHS, formatDate } from "../../utils/misc";
import { makeStyles } from "@material-ui/core/styles";
import { Bar } from "react-chartjs-2";

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

    "&.graph-container": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100%",
      padding: "0",
      "& p": {
        fontWeight: "300",
        color: "#9F9F9F",
        textAlign: "center",
      },
      "& canvas": {
        maxHeight: "400px !important",
      },
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

const MainApp = ({ countries }) => {
  const classes = useStyles();

  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [globalLastUpdate, setGlobalLastUpdate] = useState("");
  const [country, setCountry] = useState("");
  const [countryGraphData, setCountryGraphData] = useState({});
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api")
      .then((res) => res.json())
      .then((res) => {
        let confirmedCases, recoveredCases, deathCases, date;
        confirmedCases = res.confirmed.value;
        recoveredCases = res.recovered.value;
        deathCases = res.deaths.value;

        date = formatDate(res.lastUpdate);

        setGlobalLastUpdate(date);
        setConfirmed(confirmedCases);
        setRecovered(recoveredCases);
        setDeaths(deathCases);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    let countryName = event.target.value;

    setCountry(countryName);

    fetch(`https://covid19.mathdro.id/api/countries/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        const { confirmed, deaths, recovered, lastUpdate } = data;

        const modifiedCountryData = {
          confirmed: confirmed.value,
          deaths: deaths.value,
          recovered: recovered.value,
          lastUpdate: formatDate(lastUpdate),
        };
        let barArray = [];
        barArray.push(confirmed.value);
        barArray.push(recovered.value);
        barArray.push(deaths.value);

        console.log("BAR ARRAY", barArray);
        setBarChartData(barArray);
        setCountryGraphData(modifiedCountryData);
      })
      .catch((err) => console.error(err));
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
            <h6 className={classes.lastUpdated}>
              Last updated: {globalLastUpdate}
            </h6>
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
            <h6 className={classes.lastUpdated}>
              Last updated: {globalLastUpdate}
            </h6>
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
            <h6 className={classes.lastUpdated}>
              Last updated: {globalLastUpdate}
            </h6>
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
        value={country}
        onChange={handleChange}
        displayEmpty
        className={classes.countrySelect}
      >
        <MenuItem value="" disabled>
          Select a country
        </MenuItem>
        {countries.map((country, i) => (
          <MenuItem key={i} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>

      <div className={classes.infoContainer + " graph-container"}>
        {country ? (
          <Bar
            data={{
              labels: ["Infected", "Recovered", "Death"],
              datasets: [
                {
                  label: country,
                  data: barChartData,
                  backgroundColor: [
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                  ],
                  borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(255, 99, 132, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,

              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
            }}
          />
        ) : (
          <p>To see country wise cases, please select a country</p>
        )}
      </div>
    </div>
  );
};

export default MainApp;
