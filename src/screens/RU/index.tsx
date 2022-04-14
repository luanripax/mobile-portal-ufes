import React from 'react';
import {
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { MenuCard } from '../../components/MenuCard';
import { useStores } from '../../hooks/useStores';
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

export function RU({navigation}) {
  
  const { info } = useStores();

  return (
    <Container>
      <MainHeader title="Restaurante Universitário" />
      <ScrollView>
      <BalanceWrapper>
        <BalanceHeader>
          <BalanceLabel>Saldo</BalanceLabel>
          <TouchableOpacity
            onPress={() => navigation.navigate("Recharge")}
          >
            <BalanceRecharge name="plus-circle" />
          </TouchableOpacity>
        </BalanceHeader>
        <Balance>R$ 100,00</Balance>
      </BalanceWrapper>
      <MenuWrapper>
        <MenuCard items={info.RuMenu}/>
      </MenuWrapper>
      </ScrollView>
    </Container>
  );
}
