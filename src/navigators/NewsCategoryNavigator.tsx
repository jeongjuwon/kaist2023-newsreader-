import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as React from 'react';
import NewsListScreen from '../screens/NewsListScreen';

export type NewsCategoryParamList = {
  Business: {
    source: string;
    category: string;
  };
  Entertainment: {
    source: string;
    category: string;
  };
  Health: {
    source: string;
    category: string;
  };
  Science: {
    source: string;
    category: string;
  };
  Sports: {
    source: string;
    category: string;
  };
  Technology: {
    source: string;
    category: string;
  };
};

const Tab = createMaterialTopTabNavigator<NewsCategoryParamList>();

type Props = {
  source?: string;
};

const NewsCategoryNavigator: React.FC<Props> = ({source}) => {
  return (
    <Tab.Navigator
      initialRouteName="Business"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen
        name="Business"
        component={NewsListScreen}
        options={{tabBarLabel: '경제'}}
        initialParams={{
          source,
          category: 'business',
        }}
      />
      <Tab.Screen
        name="Entertainment"
        component={NewsListScreen}
        options={{tabBarLabel: '연예'}}
        initialParams={{
          source,
          category: 'entertainment',
        }}
      />
      <Tab.Screen
        name="Health"
        component={NewsListScreen}
        options={{tabBarLabel: '건강'}}
        initialParams={{
          source,
          category: 'health',
        }}
      />
      <Tab.Screen
        name="Science"
        component={NewsListScreen}
        options={{tabBarLabel: '과학'}}
        initialParams={{
          source,
          category: 'science',
        }}
      />
      <Tab.Screen
        name="Sports"
        component={NewsListScreen}
        options={{tabBarLabel: '스포츠'}}
        initialParams={{
          source,
          category: 'sports',
        }}
      />
      <Tab.Screen
        name="Technology"
        component={NewsListScreen}
        options={{tabBarLabel: '기술'}}
        initialParams={{
          source,
          category: 'technology',
        }}
      />
    </Tab.Navigator>
  );
};

export default NewsCategoryNavigator;
