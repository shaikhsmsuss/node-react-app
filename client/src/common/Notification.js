import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Notification({ notify, setNotify, closeNotification }) {
  const classes = useStyles();
  console.log("notify", notify);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    console.log("clickckkk");
    closeNotification();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        className={classes.root}
        open={notify.isOpen}
        autoHideDuration={notify.timing ? notify.timing : 2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handleClick}
      >
        <Alert
          severity={notify && notify.type ? notify.type : "error"}
          onClose={handleClick}
        >
          {notify && notify.message ? notify.message : "Something went wrong"}
        </Alert>
      </Snackbar>
    </div>
  );
}
