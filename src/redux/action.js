import {
  ADD_NEW_CHAPTER,
  EDIT_CHAPTER,
  DELETE_CHAPTER,
  GET_DATA,
  SET_CURRENT_CHAPTERS,
} from "./actionType";

export const getData = () => async (dispatch) => {
  dispatch({
    type: GET_DATA,
  });
};

export const setCurrentChapters = (chapterDetails) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_CHAPTERS,
    payload: {
      chapterDetails: chapterDetails,
    },
  });
};

export const addChapters = (newChapterName) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_CHAPTER,
    payload: {
      newChapterName: newChapterName,
    },
  });
};

export const deleteChapters = (chapterId) => async (dispatch) => {
  dispatch({
    type: DELETE_CHAPTER,
    payload: {
      chapterId: chapterId,
    },
  });
};

export const editChapters = (chapterId, newName) => async (dispatch) => {
  dispatch({
    type: EDIT_CHAPTER,
    payload: {
      chapterId: chapterId,
      newName: newName,
    },
  });
};
