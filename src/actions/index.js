export const signIn = (username, archetype, register, token, email) => {
  return {
    type: "SIGN_IN",
    username: username,
    archetype: archetype,
    register: register,
    token: token,
    email: email,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const updateUser = (username, archetype, register, token, email) => {
  return {
    type: "UPDATE_USER",
    username: username,
    archetype: archetype,
    register: register,
    token: token,
    email: email,
  };
};

export const addQuestion = (question, option, category) => {
  return {
    type: "ADD_QUESTION",
    question: question,
    option: option,
  };
};

export const addAnswers = (answers) => {
  return {
    type: "ADD_ANSWERS",
    answers: answers,
  };
};

export const resetAnswers = () => {
  return {
    type: "RESET_ANSWERS",
    answers: [],
  };
};

export const addQuiz = (questions) => {
  return {
    type: "ADD_QUIZ",
    questions: questions,
  };
};

export const storeResult = (percentage) => {
  return {
    type: "STORE_RESULT",
    result: percentage,
  };
};

export const addTemp = (answers) => {
  return {
    type: "ADD_TEMP",
    temp: answers,
  };
};

export const resetTemp = () => {
  return {
    type: "RESET_TEMP",
    temp: [],
  };
};

export const changeTemp = (answer) => {
  return {
    type: "CHANGE_TEMP",
    answer: answer,
  };
};

export const addPersonalised = (personalised) => {
  return {
    type: "ADD_PERSONALISED",
    personalised: personalised,
  };
};

export const addTmpControl = (answers) => {
  return {
    type: "ADD_TMP_CONTROL",
    tmpControl: answers,
  };
};

export const resetTmpControl = (answers) => {
  return {
    type: "RESET_TMP_CONTROL",
    tmpControl: [],
  };
};
