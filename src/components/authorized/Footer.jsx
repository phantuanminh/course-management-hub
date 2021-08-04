import React from "react";
import { Grid } from "@material-ui/core";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";
import Copyright from "../Copyright";

const Footer = () => {
  return (
    <Grid container spacing={3} justify="flex-end">
      <Grid item xs={12} align="right">
        <AddMenu />
        <EditMenu />
      </Grid>
      <Grid item xs={12} align="center">
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default Footer;
