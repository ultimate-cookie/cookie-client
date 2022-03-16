

export const setting = (room_name, room_size, player_name, category, difficulty,question_type, number_of_questions) => (
    { 
        type: 'SETTING', 
        payload: { room_name, room_size, player_name, category, difficulty,question_type, number_of_questions } 
    });

export const getScore = (score) => ({ 
    type: 'GET_SCORE',
    payload: score
});

export const loadQuestion = (firstQ) => ({ 
    type: 'LOAD_QUESTION',
    payload: firstQ
});

export const endQuestion = (correctAnswer) => ({ 
    type: 'END_QUESTION',
    payload: correctAnswer
});

export const nextQuestion = (nextQ) => ({
    type: 'NEXT_QUESTION',
    payload: nextQ
})

export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error 
});

export const submittingQuestionWrong = (incorrectAnswer) => ({
    type: 'SET_ERROR',
    payload: incorrectAnswer 
});

export const joiningRoom = (roomName) => ({
    type: 'SET_ERROR',
    payload: roomName 
});