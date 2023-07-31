import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  errorData: {
    message: "",
    type: "",
    errors: [],
  },
  isError: false,
  /*

  example question
  {
    type : "cat" | "comp" | "fill"
    question: String
    questionImg: String
    ! now depending on the type of question we will change options
    for CAT
    cats : [String]
    options: [{ans : cat}] // answer is key is the cat it belongs to is value

    for FILL
    sentence : [String] // the sentence types will be split on " "
    options : [Number] // the index of word which are to added in the fill up

    for COMP
    passage : String
    questions; [
        {
            question: String,
            options: [String]
            rightOpt: Number // it is the index of right answer
        }
    ]

  }
   */
  data: { questions: [], formName: "Change Form Name" },
  status: {},
};

const newFormSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    changeFromName: (state, { payload }) => {
      state.data.formName = payload;
    },
    addQ: (state, { payload }) => {
      state.data.questions = [...state.data.questions, payload];
    },
    changeQuestion: (state, { payload }) => {
      let modQue = state.data.questions[payload.idx];
      modQue = { ...modQue, question: payload.question };
      state.data.questions.splice(payload.idx, 1, modQue);
    },
    CATAddCategory: (state, { payload }) => {
      let modQue = state.data.questions[payload.idx];
      modQue = {
        ...modQue,
        data: {
          ...(modQue?.data || {}),
          cats: [...(modQue?.data?.cats || []), payload.cat],
        },
      };
      state.data.questions.splice(payload.idx, 1, modQue);
    },
  },
});

export default newFormSlice.reducer;
export const { addQ, changeQuestion, changeFromName, CATAddCategory } =
  newFormSlice.actions;
