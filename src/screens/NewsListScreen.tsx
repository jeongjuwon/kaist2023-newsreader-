// src/screens/NewsListScreen.tsx
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {
  CompositeScreenProps,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {Article, getHeadlines} from '../apis/headlines';
import NewsList from '../components/NewsList';
import {NewsCategoryParamList} from '../navigators/NewsCategoryNavigator';
import {RootStackParamList} from '../navigators/RootStack';

const NewsListContainer = styled.View`
  flex: 1;
`;

type Props = CompositeScreenProps<
  MaterialTopTabScreenProps<
    NewsCategoryParamList,
    | 'Business'
    | 'Entertainment'
    | 'Health'
    | 'Science'
    | 'Sports'
    | 'Technology'
  >,
  StackScreenProps<RootStackParamList>
>;

const NewsListScreen: React.FC<Props> = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const route = useRoute<Props['route']>();
  const navigation = useNavigation<Props['navigation']>();

  const onSelect = useCallback(
    (article: Article) => {
      navigation.navigate('NewsDetail', {
        article,
      });
    },
    [navigation],
  );

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
      <NewsList articles={articles} onSelect={onSelect} />
    </NewsListContainer>
  );
};

export default NewsListScreen;
