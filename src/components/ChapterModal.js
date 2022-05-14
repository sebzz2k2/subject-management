// Component for modal for editing or adding new chapter

import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, TextField, Modal } from "@mui/material";
import { editChapters, addChapters } from "../redux/action";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modalStyle: {
    padding: "2rem",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  contentStyle: {
    width: "500px",
    backgroundColor: "white",
    borderRadius: "10px",
  },
}));
const ChapterModal = ({ open, setOpen, id }) => {
  const classes = useStyles();
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);

    // to check if the data has id to choose beetween edit chapter and add chapter
    id ? dispatch(editChapters(id, newName)) : dispatch(addChapters(newName));
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className={classes.modalStyle}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <TextField focused />
          <Box sx={{ m: 0.5 }}>
            <Button color="success" type="submit" sx={{ m: 0.5 }}>
              Confirm
            </Button>
            <Button
              onClick={() => setOpen(false)}
              color="error"
              sx={{ m: 0.5 }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChapterModal;
