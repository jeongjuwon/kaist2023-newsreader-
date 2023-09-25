import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Article} from '../apis/headlines';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import MainBottomTabNavigator from './MainBottomTabNavigator';

export type RootStackParamList = {
  MainTab: undefined;
  NewsDetail: {
    article: Article;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="MainTab">
      <Stack.Screen
        name="MainTab"
        component={MainBottomTabNavigator}
        options={{
          headerShown: false,
          title: '메인',
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        options={{
          title: '상세보기',
        }}
        component={NewsDetailScreen}
      />
    </Stack.Navigator>
  );
}
