import quizReducer, {initState} from './quizReducer'

describe('quiz reducer', () => {

    test('it returns the initial state', () => {
           const initReturn = quizReducer(undefined, {type: '@@INIT'})             
        expect(quizReducer(initReturn)).toEqual({
            "category": "",
            "difficulty": "", 
            "loading": false, 
            "number_of_questions": 10, 
            "player_name": "", 
            "question_index": 0, 
            "room_name": "", 
            "room_size": "", 
            "score": 0, 
            "time_limit": -1
        });
    })

    // test('it returns the correct settings for a quiz', () => {
    //     const fakeSetting = quizReducer(
    //                         {
    //                         room_name: "",
    //                         room_size: "",
    //                         player_name: "",
    //                         category: "", 
    //                         difficulty: "", 
    //                         time_limit: -1,
    //                         number_of_questions: 10 
    //                     },
    //                         { 
    //                         type: 'SETTINGS', 
    //                         payload: 
    //                         room_name: "testName",
    //                         room_size: "1",
    //                         player_name: "Player1",
    //                         category: "All", 
    //                         difficulty: "Hard", 
    //                         time_limit: -1,
    //                         number_of_questions: 10,
    //                     }
    //                     )
    //     expect(fakeSetting).toMatchObject(
    //                             {                            
    //                             room_name: "testName",
    //                             room_size: "1",
    //                             player_name: "Player1",
    //                             category: "All", 
    //                             difficulty: "Hard", 
    //                             time_limit: -1,
    //                             number_of_questions: 10,
    //                             })
    // })

    test('it returns a score in the beginning', () => {
        const fakeScore = quizReducer(
                            { score: 0 },
                            { type: 'GET_SCORE', payload: 0}
                        )
        expect(fakeScore).toContain( {score: 0})
    })

    test('it returns a score question index of 0', () => {
        const fakeIndex = quizReducer(
                            { question_index: 0 },
                            { type: 'LOAD_QUESTION', payload: 0}
                        )
        expect(fakeIndex).toMatchObject({ question_index: 0})
    })

    test('it returns a score question index of 0', () => {
        const fakeJoin = quizReducer(
                            { room_name: 0 },
                            { type: 'JOIN_ROOM', payload: "testName"}
                        )
        expect(fakeJoin).toMatchObject({ room_name: "testName"})
    })

    test('it returns a score question index of 0', () => {
        const fakeEnd = quizReducer(
                            { score: 0 },
                            { type: 'END_QUESTION', payload: 1}
                        )
        expect(fakeEnd).toMatchObject({ score: 1})
    })

    test('it returns a score question index of 0', () => {
        const fakeError = quizReducer(
                            { error: false },
                            { type: 'SET_ERROR', payload: true}
                        )
        expect(fakeError).toMatchObject({ error: true})
    })
})