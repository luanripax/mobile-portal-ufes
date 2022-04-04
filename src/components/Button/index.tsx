import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { Container, Label } from './styles';

interface Props {
  title: string;
  color: string;
  loading?: boolean;
}

export function Button({
  title,
  color,
  loading = false,
  ...props
}: Props & TouchableOpacityProps) {
  return (
    <Container color={color} {...props}>
      <Label>{loading ? <ActivityIndicator color={'white'}/> : title}</Label>
    </Container>
  );
}
