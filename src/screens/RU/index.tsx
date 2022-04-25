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
  
  const { user, info } = useStores();
  const { userInfo } = user;

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
        <Balance>{userInfo.ru_balance}</Balance>
      </BalanceWrapper>
      <MenuWrapper>
        <MenuCard items={info.RuMenu}/>
      </MenuWrapper>
      </ScrollView>
    </Container>
  );
}
