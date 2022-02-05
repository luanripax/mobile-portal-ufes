import React from 'react';
import {
  TouchableOpacity,
  Linking,
  View,
  Text,
  ScrollView
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { MenuCard } from '../../components/MenuCard';
import {
  Container,
  MainHeader,
  BalanceWrapper,
  BalanceLabel,
  Balance,
  BalanceHeader,
  BalanceRecharge,
  MenuWrapper
} from './styles';

export function RU() {
  const data = [
    {
      id: 1,
      name: 2
    },
    {
      id: 2,
      name: 2
    }
  ];

  const render = ({ item, index }) => {
    return (
      <View>
        <Text>
          {item.id}
          {item.index}
        </Text>
      </View>
    );
  };

  return (
    <Container>
      <MainHeader title="Restaurante Universitário" />
      <BalanceWrapper>
        <BalanceHeader>
          <BalanceLabel>Saldo</BalanceLabel>
          <TouchableOpacity
            onPress={() => Linking.openURL('http://web7.ufes.br/gru-ru/')}
          >
            <BalanceRecharge name="plus-circle" />
          </TouchableOpacity>
        </BalanceHeader>
        <Balance>R$ 100,00</Balance>
      </BalanceWrapper>
      <ScrollView>
        <MenuWrapper>
          <MenuCard />
        </MenuWrapper>
      </ScrollView>
    </Container>
  );
}
