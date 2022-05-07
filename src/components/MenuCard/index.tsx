import React from 'react';
import { Image } from 'react-native';
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
import { locale } from '../../locale';

interface ItemProps {
  id: number;
  code: string;
  label: string;
  content: string;
}

export function MenuCard({items}) {

  return (
    <Container>
      <Title>{locale('ru.menu')}</Title>
      <MenuItems>
        {items.map((item: ItemProps) => 
        <Item key={item.id}>
          <ItemHeader>
            <Image 
              source={RUImages[item.code]} 
              style={{width: 25, height: 25}} 
              resizeMode="contain"
            />
            <ItemLabel>{locale(`ru.${item.code}`)}</ItemLabel>
          </ItemHeader>
          <ItemContent>{item.content}</ItemContent>
        </Item>)}
      </MenuItems>
    </Container>
  );
}
