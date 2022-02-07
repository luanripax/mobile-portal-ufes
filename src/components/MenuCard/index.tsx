import React, { ChangeEvent, useEffect } from 'react';
import { Formik, FormikProps } from 'formik';
import {
  Container,
  Title,
  MenuItems,
  Item,
  ItemLabel,
  ItemContent
} from './styles';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  error: string;
  handleChange: (e: string | ChangeEvent<any>) => void;
}

export function MenuCard({
  label,
  placeholder,
  value,
  error,
  handleChange
}: Props) {
  useEffect(() => {
    console.log(error);
  }, []);

  return (
    <Container>
      <Title>Cardápio</Title>
      <MenuItems>
        <Item>
          <ItemLabel>Salada</ItemLabel>
          <ItemContent>Cenoura e Chuchu</ItemContent>
        </Item>
        <Item>
          <ItemLabel>Prato Principal</ItemLabel>
          <ItemContent>Músculo ao Molho de Tomate</ItemContent>
        </Item>
        <Item>
          <ItemLabel>Opção</ItemLabel>
          <ItemContent>Grão de bico com ervilha</ItemContent>
        </Item>
        <Item>
          <ItemLabel>Acompanhamento</ItemLabel>
          <ItemContent>Arroz branco e feijão carioca</ItemContent>
        </Item>
        <Item>
          <ItemLabel>Guarnição</ItemLabel>
          <ItemContent>Farofa de couve</ItemContent>
        </Item>
      </MenuItems>
    </Container>
  );
}
