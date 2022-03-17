const initState = {
  room: "101",
  room_size: "",
  username: "test",
  category: 11,
  difficulty: "medium",
  type: "multiple",
  time_limit: -1,
  amount: 10,
  score: 0,
  question_index: 0,
  loading: false,
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case "SETTINGS": {
      console.log(action.payload);
      return {
        ...state,
        room: action.payload.room,
        room_size: action.payload.room_size,
        username: action.payload.username,
        category: action.payload.category,
        difficulty: action.payload.difficulty,
        time_limit: action.payload.time_limit,
        amount: action.payload.amount,
      };
    }
    case "GET_SCORE":
      return { ...state, score: action.payload.score };
    case "LOAD_QUESTION":
      return { ...state, question_index: 0 };

    case "JOIN_ROOM":
      return { ...state, room: action.payload.room };

    // case 'SUBMIT_QUESTION' :
    //     console.log(action.payload);
    //     if (chosenAnswer !== correctAnswer)

    //     return {...state,
    //             error: action.payload
    //     }

    case "END_QUESTION":
      console.log(action.payload);
      if (chosenAnswer === correctAnswer) {
        const playerScore = (state.score += 1);
      } else playerScore = state.score;
      return { ...state, score: playerScore };

    // case 'NEXT_QUESTION' :
    //     console.log(action.payload);
    //     const nextQuestion = state.question_index + 1;
    //     return {...state,
    //             question_index: nextQuestion,
    //     }

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default quizReducer;
