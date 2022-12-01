import {QuestionBoardDataState, QuestionsBoardProps} from './QuestionBoard';

export const questionBoardProps: QuestionsBoardProps = {
  questions: [
    'What is your gender?',
    'What is your age?',
    'What is your favorite food?',
  ],
  onSubmit: jest.fn(),
};

export const questionBoardState: QuestionBoardDataState = {};
