import {
  ADD_NEW_CHAPTER,
  EDIT_CHAPTER,
  DELETE_CHAPTER,
  GET_DATA,
  SET_CURRENT_CHAPTERS,
} from "./actionType";

import dta from "./data.json";

let initialState = {};

const crudChapter = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: dta,
      };

    case SET_CURRENT_CHAPTERS:
      let standardId = action.payload.chapterDetails.standard;
      let subjectName = action.payload.chapterDetails.subjects;

      let currentStandard = state.data.find(
        (data) => standardId === data.Standard
      );
      let currentSubject = currentStandard.subjects.find(
        (data) => subjectName === data.subjectName
      );
      console.log("SET CURRENT ", { currentSubject });
      return {
        ...state,
        currentData: currentSubject,
      };

    case DELETE_CHAPTER:
      let chId = action.payload.chapterId;
      const otherChapters = state.currentData.Chapters.filter(
        (data) => data.id !== chId
      );
      return {
        ...state,
        currentData: { ...state.currentData, Chapters: otherChapters },
      };

    case EDIT_CHAPTER:
      let oldChId = action.payload.chapterId;
      let remainingChapters = state.currentData.Chapters.filter(
        (data) => data.id !== oldChId
      );
      let newchapters = { id: oldChId, name: action.payload.newName };
      return {
        ...state,
        currentData: {
          ...state.currentData,
          Chapters: [...remainingChapters, newchapters],
        },
      };

    case ADD_NEW_CHAPTER:
      let currentArr = {};
      state.currentSubject
        ? (currentArr = state.currentSubject)
        : (currentArr = state.currentData);
      console.log("add_ch", currentArr.Chapters.length + 1);
      let newchapter = {
        id: currentArr.Chapters.length + 1,
        name: action.payload.newChapterName,
      };
      return {
        ...state,
        currentData: {
          ...state.currentData,
          Chapters: [...currentArr.Chapters, newchapter],
        },
      };

    default:
      return state;
  }
};
export default crudChapter;
