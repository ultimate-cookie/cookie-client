const initState = {
    room_name: "",
    room_size: "",
    player_name: "",
    category: "", 
    difficulty: "", 
    question_type: "", 
    number_of_questions: 10,
    score: 0,
    question_index: 0,
    player_turn: []
 };

 const quizReducer = (state=initState, action) => {
    switch(action.type) {
        case 'SETTINGS': {
            console.log(action.payload)
            return {...state,
                room_name: action.payload.room_name,
                room_size: action.payload.room_size,
                player_name: action.payload.player_name,
                category: action.payload.category,
                difficulty: action.payload.difficulty,
                question_type: action.payload.question_type,
                number_of_questions: action.payload.number_of_questions
                };
        }
        case 'GET_SCORE' :
            return {...state.score}

        case 'LOAD_QUESTION' :
            return {}

        case 'END_QUESTION' :
            console.log(action.payload);
            if (chosenAnswer === correctAnswer) {
                const playerScore = (state.score += 1)
            } else playerScore = (state.score)
            return {...state,
                    score: playerScore,   
            }

        case 'NEXT_QUESTION' :
            console.log(action.payload);
            const nextQuestion = state.question_index + 1;
            return {...state,
                    question_index: nextQuestion
            }

        case 'SET_ERROR' : 
            return {...state,
                    error: action.payload
            }

        default : 
            return state;
    }

}

export default quizReducer;