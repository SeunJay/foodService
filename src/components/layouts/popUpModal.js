import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Login from "../../containers/forms/Login";



function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
    background: "#fff"
  }
}));

export default function PopUpModal(props) {
  const [open, setOpen] = React.useState(false);
  const { modalLoginOpen, setHeaderModal } = props;
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  useEffect(() => {
    if (modalLoginOpen) {
      setOpen(true);
    }
    
  }, [modalLoginOpen]);


  const handleClose = () => {
    setOpen(false);
    setHeaderModal();
  };
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Login />
        </div>
      </Modal>
    </div>
  );
}
