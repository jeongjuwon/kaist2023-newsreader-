import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface NewsItemProps {
  title: string;
  description: string;
  imageUrl: string | null;
  onSelect: () => void;
}

const Container = styled.View`
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  background-color: #f0f0f0;
  margin-left: 16px;
  margin-right: 16px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.Text`
  margin-top: 20px;
  font-size: 16px;
`;

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  imageUrl,
  onSelect,
}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Container style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
export default NewsItem;
