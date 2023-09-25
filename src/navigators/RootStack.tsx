import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Text, View} from 'react-native';
import MainBottomTabNavigator from './MainBottomTabNavigator';

function NewDetail() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>NewDetail!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTab" component={MainBottomTabNavigator} />
      <Stack.Screen name="NewDetail" component={NewDetail} />
    </Stack.Navigator>
  );
}
