// src/screens/TabScreen.tsx
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import {MainBottomTabParamList} from '../navigators/MainBottomTabNavigator';
import NewsCategoryNavigator from '../navigators/NewsCategoryNavigator';

const NewsListContainer = styled.View`
  flex: 1;
`;

type Props = BottomTabScreenProps<
  MainBottomTabParamList,
  'Chosun' | 'Hani' | 'Headlines' | 'Sedail'
>;

const TabScreen: React.FC<Props> = () => {
  const route = useRoute<Props['route']>();

  return (
    <NewsListContainer>
      <NewsCategoryNavigator source={route.params?.source} />
    </NewsListContainer>
  );
};

export default TabScreen;
