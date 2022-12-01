import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export type QuestionsBoardProps = {
  questions: string[];
  onSubmit: (obj: {}) => void;
};

export type QuestionBoardDataState = Record<number, {q: string; a: string}>;

export const QuestionsBoard = ({questions, onSubmit}: QuestionsBoardProps) => {
  const [data, setData] = useState<QuestionBoardDataState>({});

  return (
    <ScrollView>
      {questions.map((q, index) => {
        return (
          <View key={q}>
            <Text>{q}</Text>

            <TextInput
              accessibilityLabel="answer input"
              accessibilityHint="input"
              onChangeText={text => {
                setData(prevData => ({
                  ...prevData,
                  [index + 1]: {q, a: text},
                }));
              }}
            />
          </View>
        );
      })}

      <TouchableOpacity onPress={() => onSubmit(data)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
