import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { Container, Label } from './styles';

interface Props {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading = false,
  ...props
}: Props & TouchableOpacityProps) {
  return (
    <Container {...props}>
      <Label>{loading ? <ActivityIndicator color={'white'}/> : title}</Label>
    </Container>
  );
}
