import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Box from "@mui/material/Box";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { makeStyles } from "@mui/styles";
import { category } from "../assets/data";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Typography, Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {},
  categorySection: {
    padding: "0px 20px",
  },
  iconImg: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center",
  },
}));
export default function FolderList() {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={"title"}
        style={{ textAlign: "center" }}
        variant="h5"
      >
        Categories
      </Typography>
      <Paper style={{ maxHeight: 200, overflow: "auto" }}>
        <List
          sx={{
            bgcolor: "background.paper",
            display: "flex",
            flexWrap: "nowwrap",
            padding: { xs: "0px", sm: "0px 30px" },
            textAlign: "center",
            paddingX: "40px",
          }}
        >
          {category.map((category, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "10px",
                }}
              >
                <Box sx={{ width: 80, height: 80 }}>
                  <img src={category.img} className={classes.iconImg} alt="" />
                </Box>

                <ListItemText
                  sx={{ textAlign: "center" }}
                  primary={category.name}
                />
              </ListItem>
            );
          })}
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#f4f4f4",
            }}
          >
            <Avatar
              sx={{
                width: 50,
                height: 50,
                margin: "8px 0px",
                backgroundColor: "#f4f4f4",
                padding: "10px",
              }}
            >
              <MoreHorizIcon sx={{ color: "#bfbfbf" }} fontSize="large" />
            </Avatar>

            <ListItemText
              sx={{ textAlign: "center", color: "#a9a8a8" }}
              primary={"View All"}
            />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}
