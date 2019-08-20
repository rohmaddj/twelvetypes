export const signIn = (username, archetype, token) => {
  return {
    type: 'SIGN_IN',
    username: username,
    archetype: archetype,
    token: token
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const updateUser = (username, archetype, token) => {
  return {
    type: 'UPDATE_USER',
    username: username,
    archetype: archetype,
    token: token
  }
}

export const addQuestions = (questions, options, category) => {
  return {
    type: 'ADD_QUESTIONS',
    questions: questions,
    options: options,
    category: category
  }
}

export const addAnswers = (answers) => {
  return {
    type: 'ADD_ANSWERS',
    answers: answers
  }
}