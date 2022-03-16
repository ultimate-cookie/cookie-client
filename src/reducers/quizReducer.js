const initState = {
    room_name: "",
    room_size: "",
    player_name: "",
    category: "", 
    difficulty: "", 
    time_limit: "", 
    number_of_questions: 10,
    score: 0,
    question_index: 0,
    loading: false

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
                time_limit: action.payload.time_limit,
                number_of_questions: action.payload.number_of_questions,
                score: action.payload.score,
                question_index: action.payload.question_index,
                loading: action.payload.loading

                };
        }
        case 'GET_SCORE' :
            return {...state.score}

        case 'LOAD_QUESTION' :
            return {...state,
                    question_index: 0,
                    loading: true
            }

        case 'JOINING_ROOM' : 
            return {...state,
                    room_name: action.payload,
                    loading: true
            }

        case 'SUBMITTING_QUESTION_WRONG' : 
            console.log(action.payload);
            if (chosenAnswer !== correctAnswer)
                
            return {...state,
                    error: action.payload
            }

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
                    question_index: nextQuestion,
                    loading: true
            }

        case 'SET_ERROR' : 
            return {...state,
                    error: action.payload
                    loading: false
            }


        default : 
            return state;
    }

}

export default quizReducer;