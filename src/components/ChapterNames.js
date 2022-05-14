// Component to display data or delete a data

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Typography, Box, Button } from "@mui/material";
import ChapterModal from "./ChapterModal";

import { deleteChapters } from "../redux/action";

const ChapterNames = ({ ch }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const dispatch = useDispatch();

  // delete chapter function
  const dltChapter = () => {
    dispatch(deleteChapters(ch.id));
  };

  return (
    <div>
      <Box sx={{ m: 5 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" textAlign="left">
            {ch.name}
          </Typography>
          <div>
            <Button
              onClick={() => {
                setConfirmOpen(true);
              }}
            >
              Edit
            </Button>
            <Button onClick={dltChapter}>Delete</Button>
          </div>
          <ChapterModal
            id={ch.id}
            open={confirmOpen}
            setOpen={setConfirmOpen}
            chapterName={ch.name}
            // setChapterName={setChapterName}
          />
        </Box>
      </Box>
    </div>
  );
};

export default ChapterNames;
