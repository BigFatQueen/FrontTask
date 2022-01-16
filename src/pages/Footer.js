import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
const useStyle = makeStyles((theme) => ({
  root: {
    padding: "20px 40px",
    color: "#fff",
    backgroundColor: "red",
  },
  copyright: {
    padding: "10px 0px",
    textAlign: "center",
  },
}));
const Footer = () => {
  const classes = useStyle();
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1" gutterBottom component={"div"}>
            Customer Service
          </Typography>
          <Typography variant="body2" component={"div"}>
            Terms & Privacy Policy
          </Typography>
          <Typography variant="body2" component={"div"}>
            Return Policy
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1" gutterBottom component={"div"}>
            Language
          </Typography>
          <Typography variant="body2" component={"div"}>
            Myanmar(Unicode)
          </Typography>
          <Typography variant="body2" component={"div"}>
            English
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1" gutterBottom component={"div"}>
            Contact Us
          </Typography>
          <Typography variant="body2" component={"div"}>
            No 178,Myakha St,Mayagone,6 miles,Yangon,Myanmar
          </Typography>
          <Typography variant="body2" component={"div"}>
            +95 345 454 654
          </Typography>
        </Grid>
      </Grid>
      <Box className={classes.copyright}>
        <Typography variant="body2" component={"div"}>
          All rights served.Made with all love with Snowdoora Co.,Ltd.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
