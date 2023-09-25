import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import TabScreen from '../screens/TabScreen';

export type MainBottomTabParamList = {
  Headlines: undefined;
  Sedail: {
    source: string;
  };
  Hani: {
    source: string;
  };
  Chosun: {
    source: string;
  };
};

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export default function MainBottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Headlines" component={TabScreen} />
      <Tab.Screen
        name="Sedail"
        options={{
          tabBarLabel: '세계경제',
          headerTitle: '세계경제',
        }}
        component={TabScreen}
        initialParams={{
          source: 'Sedaily.co',
        }}
      />
      <Tab.Screen
        name="Hani"
        component={TabScreen}
        initialParams={{
          source: 'Hani.co.kr',
        }}
        options={{
          tabBarLabel: '한겨레',
          headerTitle: '한겨레',
        }}
      />
      <Tab.Screen
        name="Chosun"
        component={TabScreen}
        initialParams={{
          source: 'Chosun.com',
        }}
        options={{
          tabBarLabel: '조선일보',
          headerTitle: '조선일보',
        }}
      />
    </Tab.Navigator>
  );
}
