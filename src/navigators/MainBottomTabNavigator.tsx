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

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Headlines" component={TabScreen} />
      <Tab.Screen
        name="Sedail"
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
      />
      <Tab.Screen
        name="Chosun"
        component={TabScreen}
        initialParams={{
          source: 'Chosun.com',
        }}
      />
    </Tab.Navigator>
  );
}
