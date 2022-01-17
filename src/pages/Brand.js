import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { brands } from "../assets/data";
const useStyle = makeStyles((theme) => ({
  brandicons: {
    overflow: "auto",
    [theme.breakpoints.down("md")]: {
      minwidth: 200,
      overflow: "auto",
    },
  },
  photoSection: {
    height: "100px",
    backgroundColor: "#fff",
    "& img": {
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
}));

const Brand = () => {
  const classes = useStyle();
  return (
    <div>
      <div className="titleDiv">
        <Typography
          className={"title"}
          style={{ textAlign: "start" }}
          variant="h5"
        >
          View By Brands
        </Typography>
        <Typography style={{ textAlign: "end" }} variant="body1">
          View More
        </Typography>
      </div>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        className={classes.brandicons}
      >
        {brands.map((item, index) => (
          <Box key={index} className={classes.photoSection}>
            <img src={item} alt={item} />
          </Box>
        ))}
        <Box className={classes.photoSection} style={{ display: "flex" }}>
          <Typography
            style={{ display: "flex", alignSelf: "center", color: "red" }}
            variant="body1"
            component="div"
          >
            P view all
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Brand;
