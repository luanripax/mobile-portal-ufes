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
}

export function MenuCard({items}) {

  return (
    <Container>
      <Title>Cardápio</Title>
      <MenuItems>
        {items.map(item => 
        <Item key={item.id}>
          <ItemHeader>
            <Image source={RUImages[item.code]} style={{width: 25, height: 25}} resizeMode="contain"/>
            <ItemLabel>{item.label}</ItemLabel>
          </ItemHeader>
          <ItemContent>{item.content}</ItemContent>
        </Item>)}
      </MenuItems>
    </Container>
  );
}
