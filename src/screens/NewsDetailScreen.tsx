// src/screens/NewsDetailScreen.tsx
import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import dayjs from 'dayjs';
import React from 'react';
import {Image, Linking, ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';
import {RootStackParamList} from '../navigators/RootStack';

const Container = styled.View`
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.Text`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Details = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

type Props = StackScreenProps<RootStackParamList, 'NewsDetail'>;

const NewsDetailScreen: React.FC<Props> = () => {
  const route = useRoute<Props['route']>();

  const {
    article: {
      author,
      content,
      description,
      publishedAt,
      source,
      title,
      url,
      urlToImage,
    },
  } = route.params;

  const handleOpenLink = () => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <Container>
        <Title>{title}</Title>
        {urlToImage && (
          <Image
            source={{uri: urlToImage}}
            style={{
              resizeMode: 'contain',
              height: 200,
            }}
          />
        )}
        <Description>{description}</Description>
        <Details>
          <Text style={{fontWeight: 'bold'}}>Author:</Text> {author}
        </Details>
        <Details>
          <Text style={{fontWeight: 'bold'}}>Content:</Text> {content}
        </Details>
        <Details>
          <Text style={{fontWeight: 'bold'}}>Published At:</Text>{' '}
          {dayjs(publishedAt).format('YYYY-MM-DD')}
        </Details>
        <Details>
          <Text style={{fontWeight: 'bold'}}>Source:</Text> {source.name}
        </Details>
        <Text onPress={handleOpenLink} style={{color: 'blue'}}>
          Read more
        </Text>
      </Container>
    </ScrollView>
  );
};

export default NewsDetailScreen;
