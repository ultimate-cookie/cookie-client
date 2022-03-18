import { default as Quiz } from '.';
import { screen, render } from '@testing-library/react';

describe('Quiz', () => {
    beforeEach(() =>{
        const questionStub = [
            {"category":"Entertainment: Books",
            "type":"multiple",
            "difficulty":"easy",
            "question":"Who wrote &quot;Harry Potter&quot;?",
            "correct_answer":"J.K. Rowling",
            "incorrect_answers":["J.R.R. Tolkien","Terry Pratchett","Daniel Radcliffe"]}
        ]
        render(<Quiz questions={questionStub} />)
    })
    
    describe("createQuiz", () => {
        it("renders lobby", () => {
            render(<Quiz />);
            let content = screen;
            expect(content).toBeTruthy();
        });
    });
    
    // describe("createQuiz", () => {
    //     test ('question is shown', () =>{
    //         render(<Quiz questions={questionStub}/>);
    //         const question = screen.findByText('Who wrote &quot;Harry Potter&quot;?')
    //         expect(question).toBeInTheDocument();
    //     })
    // });


});