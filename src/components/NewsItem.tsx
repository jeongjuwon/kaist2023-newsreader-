import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface NewsItemProps {
  title: string;
  description: string;
  imageUrl: string | null;
}

const Container = styled.View`
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  background-color: #f0f0f0;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.Text`
  font-size: 16px;
`;

const NewsItem: React.FC<NewsItemProps> = ({title, description, imageUrl}) => {
  return (
    <TouchableOpacity>
      <Container>
        <Title>{title}</Title>
        {imageUrl && (
          <Image
            source={{uri: imageUrl}}
            style={{
              resizeMode: 'contain',
              height: 200,
            }}
          />
        )}
        <Description>{description}</Description>
      </Container>
    </TouchableOpacity>
  );
};

export default NewsItem;
