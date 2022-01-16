import React from "react";
import Card from "./../components/Card";
import { Typography, Grid } from "@mui/material";
import { newArrival } from "../assets/data";
import { ClassNames } from "@emotion/react";

const NewArrival = () => {
  return (
    <div>
      <div className="titleDiv">
        <Typography
          className={"title"}
          style={{ textAlign: "start" }}
          variant="h5"
        >
          New Arrival
        </Typography>
        <Typography style={{ textAlign: "end" }} variant="body1">
          View More
        </Typography>
      </div>
      <Grid container spacing={1}>
        {newArrival.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              xs={6}
              sm={6}
              md={2}
              display="flex"
              justifyContent="center"
            >
              <Card
                name={item.name}
                price={item.price}
                newArrival={item.status}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default NewArrival;
