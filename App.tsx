import {Button, NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {customTheme} from './src/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <SafeAreaView>
        <Button colorScheme="orangePeel">Welcome to NativeBase</Button>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
