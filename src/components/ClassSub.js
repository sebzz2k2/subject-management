// Main component

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentChapters, getData } from "../redux/action";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

import ChapterModal from "./ChapterModal";
import ChapterNames from "./ChapterNames";

const ClassSub = () => {
  let { currentData, data } = useSelector((state) => state);
  console.log({ currentData });
  const [classData, setClassData] = useState({
    standard: null,
    subjects: "",
  });
  const [sub, setSub] = useState({});
  const [loading, setLoading] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    dispatch(getData(data));
  }, []);

  const dispatch = useDispatch();

  //handlechange for first select field
  const handleChange = (e) => {
    e.preventDefault();
    let tempData = { ...classData, [e.target.name]: e.target.value };
    let fnc = data.find((data) => tempData.standard === data.Standard);
    setSub(fnc);
    setClassData(tempData);
  };

  //handlechange for second select field
  const handleChange1 = (e) => {
    e.preventDefault();
    let tempData = { ...classData, [e.target.name]: e.target.value };
    setLoading(!loading);
    dispatch(setCurrentChapters(tempData));
  };

  // add chapter function
  const addChapter = () => {
    setConfirmOpen(true);
  };
  return (
    <>
      <Box display="flex">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">
            Select Class
          </InputLabel>
          <Select
            id="demo-simple-select"
            label="Age"
            onChange={handleChange}
            sx={{ m: 0.5, width: 320 }}
            size="small"
            name="standard"
          >
            {data
              ? data.map((dat) => {
                  return (
                    <MenuItem
                      defaultValue={null}
                      value={dat.Standard}
                      key={dat.Standard}
                    >
                      {dat.Standard}
                    </MenuItem>
                  );
                })
              : null}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">
            Select Subject
          </InputLabel>
          <Select
            id="demo-simple-select"
            label="Age"
            onChange={handleChange1}
            sx={{ m: 0.5, width: 320 }}
            size="small"
            name="subjects"
          >
            {sub && sub.subjects && sub.subjects.length > 0
              ? sub.subjects.map((da, index) => {
                  return (
                    <MenuItem value={da.subjectName} key={index}>
                      {da.subjectName}
                    </MenuItem>
                  );
                })
              : null}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={addChapter}
          sx={{ m: 0.5, width: 320 }}
        >
          Add Chapter
        </Button>
        <ChapterModal open={confirmOpen} setOpen={setConfirmOpen} />
      </Box>
      {currentData && currentData.Chapters && currentData
        ? currentData.Chapters.map((ch, index) => (
            <ChapterNames key={index} ch={ch} />
          ))
        : null}
    </>
  );
};

export default ClassSub;
