import React, { useState } from 'react';
import {
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { MenuCard } from '../../components/MenuCard';
import { useStores } from '../../hooks/useStores';
import { Updater } from '../../components/Updater';
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
import { locale } from '../../locale';

export function RU({navigation}) {
  
  const { user, info } = useStores();
  const { userInfo } = user;

  const [,setUpdate] = useState(false);

  return (
    <Container>
      <MainHeader title={locale('ru.title')} />
      <ScrollView>
      <BalanceWrapper>
        <BalanceHeader>
          <BalanceLabel>{locale('ru.balance')}</BalanceLabel>
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
      <Updater update={setUpdate} />
    </Container>
  );
}
