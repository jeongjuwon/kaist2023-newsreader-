import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RootStack from './src/navigators/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
