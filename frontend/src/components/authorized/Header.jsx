import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography variant="h4" style={{ fontWeight: "800" }}>
          Course Management Hub
        </Typography>
      </Grid>
      <Grid item xs={2} className="buttons" align="right">
        <Button>
          <DateRangeIcon />
        </Button>
        <Button>
          <AccountCircleIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
