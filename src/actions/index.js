

export const setting = (room_name, room_size, player_name, category, difficulty,question_type, number_of_questions) => (
    { 
        type: 'SETTING', 
        payload: { room_name, room_size, player_name, category, difficulty,question_type, number_of_questions } 
    });

export const getScore = (score) => ({ 
    type: 'GET_SCORE',
    payload: score
});

export const loadQuestion = () => ({ 
    type: 'LOAD_QUESTION',
    payload: {}
});

export const endQuestion = () => ({ 
    type: 'END_QUESTION',
    payload: {}
});

export const nextQuestion = () => ({
    type: 'NEXT_QUESTION',
    payload: {}
})

export const setError = () => ({
    type: 'SET_ERROR',
    payload: {} 
});