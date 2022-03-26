import React, { ChangeEvent, useEffect } from 'react';
import { Image } from 'react-native';
import { Formik, FormikProps } from 'formik';
import {
  Container,
  Title,
  MenuItems,
  Item,
  ItemLabel,
  ItemContent,
  ItemHeader
} from './styles';
import RUImages from '../../assets/index';

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

  return (
    <Container>
      <Title>Cardápio</Title>
      <MenuItems>
        <Item>
          <ItemHeader>
            <Image source={RUImages.salad} style={{width: 25, height: 25}} resizeMode="contain"/>
            <ItemLabel>Salada</ItemLabel>
          </ItemHeader>
          <ItemContent>Cenoura e Chuchu</ItemContent>
        </Item>
        <Item>
          <ItemHeader>
            <Image source={RUImages.meat} style={{width: 25, height: 25}} resizeMode="contain"/>
            <ItemLabel>Prato Principal</ItemLabel>
          </ItemHeader>
          <ItemContent>Músculo ao Molho de Tomate</ItemContent>
        </Item>
        <Item>
          <ItemHeader>
            <Image source={RUImages.vegetarian} style={{width: 25, height: 25}} resizeMode="contain"/>
            <ItemLabel>Opção</ItemLabel>
          </ItemHeader>
          <ItemContent>Grão de bico com ervilha</ItemContent>
        </Item>
        <Item>
          <ItemHeader>
            <Image source={RUImages.accompaniment} style={{width: 25, height: 25}} resizeMode="contain"/>
            <ItemLabel>Acompanhamento</ItemLabel>
          </ItemHeader>
          <ItemContent>Arroz branco e feijão carioca</ItemContent>
        </Item>
        <Item>
          <ItemHeader>
            <Image source={RUImages.garnish} style={{width: 25, height: 25}} resizeMode="contain"/>
            <ItemLabel>Guarnição</ItemLabel>
          </ItemHeader>
          <ItemContent>Farofa de couve</ItemContent>
        </Item>
      </MenuItems>
    </Container>
  );
}
