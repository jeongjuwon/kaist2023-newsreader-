// src/screens/NewsList.tsx
import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Article} from '../apis/headlines';
import NewsItem from './NewsItem';

const NewsListContainer = styled.View`
  padding: 16px;
`;

type Props = {
  articles: Article[];
};

const NewsList: React.FC<Props> = ({articles}) => {
  return (
    <NewsListContainer>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({item}) => (
          <NewsItem
            title={item.title}
            description={item.description}
            imageUrl={item.urlToImage}
          />
        )}
      />
    </NewsListContainer>
  );
};

export default NewsList;
