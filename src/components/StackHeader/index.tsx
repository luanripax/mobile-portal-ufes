import React from 'react';

import { Container, Title, Icon, TitleWrapper, IconWrapper } from './styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  title: string;
}

export function StackHeader({ title, ...props }: Props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container {...props}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="chevron-left" />
      </TouchableOpacity>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </Container>
  );
}
