import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

const TabBarIcon = (
  route: RouteProp<MainBottomTabParamList, keyof MainBottomTabParamList>,
) => {
  const Component: FC<{focused: boolean; color: string; size: number}> = ({
    focused,
    color,
    size,
  }) => {
    let iconName = '';

    if (route.name === 'Headlines') {
      iconName = focused ? 'apps' : 'apps-outline';
    } else if (route.name === 'Sedail') {
      iconName = focused ? 'albums' : 'albums-outline';
    } else if (route.name === 'Hani') {
      iconName = focused ? 'albums' : 'albums-outline';
    } else if (route.name === 'Chosun') {
      iconName = focused ? 'albums' : 'albums-outline';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  };
  return Component;
};

export default function MainBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: TabBarIcon(route),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
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
