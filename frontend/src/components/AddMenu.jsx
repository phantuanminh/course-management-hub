import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Avatar, TextField, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddMenu = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button onClick={handleClickOpen}>
        <AddIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title" style={{align: "center"}}>{"Add a new course"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={3}>
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Add a new course
                </Typography>
                {/* <Avatar className={classes.avatar}> */}
                <AddCircleIcon />
                {/* </Avatar> */}
                <form className={classes.form} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="course-name"
                    label="Course Name"
                    name="course-name"
                    autoComplete="course-name"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="website"
                    label="Course Website"
                    name="website"
                    autoComplete="website"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="forum"
                    label="Forum"
                    name="forum"
                    autoComplete="forum"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="other-resources"
                    label="Other Resources"
                    name="other-resources"
                    autoComplete="other-resources"
                  />
                  <Button
                    onClick={handleClose}
                    color="secondary"
                    className={classes.submit}
                    autoFocus>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleClose}
                    color="primary"
                    type="submit"
                    className={classes.submit}
                    style={{float: "right"}}
                    autoFocus>
                    Add Course
                  </Button>
                </form>
              </div>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddMenu
