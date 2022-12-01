import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {QuestionsBoard} from './QuestionBoard';
import {questionBoardProps} from './QuestionBoard.mock';

test('given a list of form questions, submit and show the resuls based on data filled', () => {
  const {getAllByLabelText, getByText} = render(
    <QuestionsBoard
      questions={questionBoardProps.questions}
      onSubmit={questionBoardProps.onSubmit}
    />,
  );

  const answerInputs = getAllByLabelText('answer input');

  fireEvent.changeText(answerInputs[0], 'Male');
  fireEvent.changeText(answerInputs[1], '17');
  fireEvent.changeText(answerInputs[2], 'Pizza');
  fireEvent.press(getByText('Submit'));

  expect(questionBoardProps.onSubmit).toHaveBeenCalledWith({
    '1': {q: 'What is your gender?', a: 'Male'},
    '2': {q: 'What is your age?', a: '17'},
    '3': {q: 'What is your favorite food?', a: 'Pizza'},
  });
});

export {};
