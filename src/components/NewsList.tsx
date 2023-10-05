// src/screens/NewsList.tsx
import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Article} from '../apis/headlines';
import NewsItem from './NewsItem';

const NewsListContainer = styled.View`
  background-color: #ffffff;
`;

type Props = {
  articles: Article[];
  onSelect: (article: Article) => void;
};

const NewsList: React.FC<Props> = ({articles, onSelect}) => {
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
            onSelect={() => onSelect(item)}
          />
        )}
      />
    </NewsListContainer>
  );
};

export default NewsList;
