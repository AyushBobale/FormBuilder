import mongoose from "mongoose";

/*

  example question
  {
    type : "cat" | "comp" | "fill"
    question: String
    questionImg: String
    ! now depending on the type of question we will change data
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

  as for responses {
    for CAT
    answers: [{ans: cat}]
    we can match this against the data stored in the database

    for FILL
    answers: [Number] // returned array of index
    we can match this against the 
  }
   */

// question stuff
const FromQuestionSchema = new mongoose.Schema({
  queType: {
    type: String,
    enum: ["CAT", "FILL", "COMP"],
    required: true,
  },
  question: { type: String },
  image: { type: String },
  data: { type: Object },
});

const NewFormSchema = new mongoose.Schema({
  questions: { type: [FromQuestionSchema] },
});

// Response stuff
const NewFormAnswerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Types.ObjectId },
  answer: { type: Object },
});

const NewFormResonseSchema = new mongoose.Schema({
  formId: { type: mongoose.Types.ObjectId, required: true },
  answers: { type: [NewFormAnswerSchema] },
});

// Models
const NewFormModel = mongoose.model("NewForm", NewFormSchema);
const NewFormResponseModel = mongoose.model(
  "NewFormResponse",
  NewFormResonseSchema
);
export { NewFormModel, NewFormResponseModel };
