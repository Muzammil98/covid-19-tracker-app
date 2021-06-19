import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import InfoPopper from "./InfoPopper";
import { AiTwotoneHeart } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100%",
    backgroundColor: "#1D1F31",
    color: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
      minHeight: "100vh",
    },
  },
  fullSvg: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: 0,
    zIndex: 0,
    "& #fullSvg-1, & #fullSvg-2": {
      transform: "translateX(20%)",
    },
  },
  fullSvgPot: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: 0,
    zIndex: 0,
  },
  footer: {
    fontSize: "10px",
    fontWeight: "200",
    zIndex: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#cabfbf",
    position: "absolute",
    [theme.breakpoints.up('sm')]:{
      right:"20px",
      
    },
    bottom: "20px",
    "& .heart": {
      color: "#d03232",
      fontSize: "12px",
      marginLeft:"5px"
    },
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <svg
        className={classes.fullSvg}
        width="1440"
        height="967"
        viewBox="0 0 1440 967"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="fullSvg-1"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1168.15 0.198741C1238.29 -3.38745 1299.94 42.1927 1355.08 85.6976C1408.29 127.675 1462.49 176.565 1475.91 242.998C1488.78 306.748 1451.02 366.993 1423.82 426.068C1399.9 478 1374.95 530.371 1328.33 563.471C1282.04 596.338 1224.39 615.319 1168.15 607.596C1115.41 600.355 1077.22 558.367 1037.02 523.474C1000.55 491.817 973.43 455.043 946.329 415.068C906.919 356.938 832.278 306.764 843.052 237.365C853.629 169.231 938.896 144.764 994.599 104.127C1050.44 63.3897 1099.12 3.72779 1168.15 0.198741Z"
          fill="url(#paint0_linear)"
        />
        <path
          id="fullSvg-2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1309.47 698.013C1332.45 702.762 1353.75 710.651 1373.02 724.02C1392.67 737.657 1412.84 752.66 1420.71 775.209C1428.67 797.99 1420.3 821.976 1415.48 845.616C1409.95 872.727 1408.88 901.854 1390.64 922.698C1369.88 946.43 1340.93 969.533 1309.47 966.776C1278.24 964.038 1256.68 934.475 1238.04 909.323C1223.54 889.744 1224.36 864.441 1216.57 841.371C1208.64 817.922 1190.91 797.924 1192.05 773.205C1193.41 743.854 1198.62 708.982 1223.41 693.109C1248.2 677.236 1280.63 692.054 1309.47 698.013Z"
          fill="url(#paint1_linear)"
        />
        <path
          id="fullSvg-3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-21.8994 378.552C33.6932 383.556 80.1863 413.147 130.599 437.109C195.081 467.758 296.338 468.72 313.569 538.005C331.18 608.821 229.452 652.252 200.793 719.362C176.276 776.771 206.496 855.732 160.063 897.455C113.478 939.313 40.5835 915.19 -21.8994 919.459C-90.4265 924.142 -161.961 955.364 -222.874 923.623C-286.607 890.414 -331.468 822.42 -343.951 751.646C-355.768 684.651 -313.774 623.392 -286.849 560.917C-262.747 504.99 -245.905 442.264 -195.739 407.735C-146.125 373.585 -81.8883 373.152 -21.8994 378.552Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="1160.25"
            y1="0"
            x2="1160.25"
            y2="609.312"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#302C42" />
            <stop offset="1" stop-color="#191B2C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="1319.5"
            y1="978.5"
            x2="1308"
            y2="706"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1B1D2F" />
            <stop offset="1" stop-color="#302C42" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="-15.1983"
            y1="376"
            x2="-15.1983"
            y2="937.693"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#302C42" />
            <stop offset="1" stop-color="#1B1D2E" />
          </linearGradient>
        </defs>
      </svg>

      <InfoPopper />
      {children}
      <div className={classes.footer}>
        <p>Hand-crafted and made with</p>
        <AiTwotoneHeart className="heart" />
      </div>
    </div>
  );
};

export default Layout;
