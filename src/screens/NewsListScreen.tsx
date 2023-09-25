// src/screens/NewsListScreen.tsx
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {Article, getHeadlines} from '../apis/headlines';
import NewsList from '../components/NewsList';
import {NewsCategoryParamList} from '../navigators/NewsCategoryNavigator';

const NewsListContainer = styled.View`
  flex: 1;
`;

type Props = MaterialTopTabScreenProps<
  NewsCategoryParamList,
  'Business' | 'Entertainment' | 'Health' | 'Science' | 'Sports' | 'Technology'
>;

const NewsListScreen: React.FC<Props> = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const route = useRoute<Props['route']>();

  useFocusEffect(
    useCallback(() => {
      async function init() {
        try {
          const data = await getHeadlines({
            source: route.params?.source,
            category: route.params?.category,
          });
          setArticles(data.articles);
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      }
      init();
    }, [route.params]),
  );

  return (
    <NewsListContainer>
      <NewsList articles={articles} />
    </NewsListContainer>
  );
};

export default NewsListScreen;
