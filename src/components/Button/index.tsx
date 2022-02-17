import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Label } from './styles';

interface Props {
  title: string;
  color: string;
}

export function Button({
  title,
  color,
  ...props
}: Props & TouchableOpacityProps) {
  return (
    <Container color={color} {...props}>
      <Label>{title}</Label>
    </Container>
  );
}
