import React from 'react';

import { Container, Label } from './styles';

interface Props {
  title: string;
  color: string;
}

export function Button({ title, color, ...props }: Props) {
  return (
    <Container color={color} {...props}>
      <Label>{title}</Label>
    </Container>
  );
}
