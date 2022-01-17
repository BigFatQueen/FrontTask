import React from "react";
import Card from "./../components/Card";
import { Typography, Grid, Box } from "@mui/material";
import { buyonegetoneArray } from "../assets/data";

const BuyOneGetOne = () => {
  // console.log(buyonegetoneArray);
  return (
    <Box sx={{ backgroundColor: "yellow" }}>
      <div className="titleDiv">
        <Typography
          className={"title"}
          style={{ textAlign: "start" }}
          variant="h5"
        >
          Buy 1 Get 1
        </Typography>
        <Typography style={{ textAlign: "end" }} variant="body1">
          View More
        </Typography>
      </div>
      <Grid container spacing={1}>
        {buyonegetoneArray.map((item, index) => {
          return (
            <Grid
              key={index}
              item
              xs={6}
              sm={6}
              md={2}
              display="flex"
              justifyContent="center"
            >
              <Card name={item.name} price={item.price} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BuyOneGetOne;
