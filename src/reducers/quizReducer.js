const INITIAL_STATE = {
  questions: [],
  options: [],
  answers: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_QUESTIONS':
      return {
        ...state,
        questions: action.questions,
        options: action.options,
        category: action.category
      }
    case 'ADD_ANSWERS':
      return {
        ...state, answers: action.answers
      }
    default:
      return state
  }
}