import React from 'react';
import { CollegiateNew } from '../../components/CollegiateNew';

import { Container, MainHeader } from './styles';

export function Feed() {
  return (
    <Container>
      <MainHeader title="Notícias" />
      <CollegiateNew
        date="Ontem"
        content="Carteirinhas já estão disponiveis, vem buscar aqui por favor"
        liked={true}
        likes={21}
      />
      <CollegiateNew
        date="1 dia atrás"
        content="Muitas pessoas precisam aprender a usar o vaso e nao jogar papel na privada, fazer nao fazer mais isso ok?"
        liked={false}
        likes={10}
      />
      <CollegiateNew
        date="1 mês atrás"
        content="A votação vai acontecer amanhã lá no auditório do ccee as 21 horas"
        liked={true}
        likes={2}
      />
    </Container>
  );
}
