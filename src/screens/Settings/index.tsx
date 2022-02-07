import React, { useState } from 'react';
import { View, Text, Platform, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  Container,
  MainHeader,
  Setting,
  Label,
  Separator,
  SettingsWrapper,
  Logout,
  LogoutLabel,
  SwitchButton,
  DropDown
} from './styles';

export function Settings() {
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

  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Escuro', value: 'apple' },
    { label: 'Claro', value: 'banana' }
  ]);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <MainHeader title="Configurações" />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{
          position: 'absolute',
          width: 80,
          height: hp(6),
          backgroundColor: 'transparent',
          borderWidth: 0
        }}
        containerStyle={{
          width: 70,
          position: 'relative',
          left: wp(83),
          top: hp(1.2)
        }}
        textStyle={{
          color: 'grey',
          fontSize: hp(2)
        }}
        labelStyle={{
          color: 'grey',
          fontSize: hp(2)
        }}
        arrowIconStyle={{
          display: 'none'
        }}
        dropDownContainerStyle={{
          backgroundColor: '#1C1C1C',
          borderColor: 'grey'
        }}
        tickIconStyle={{
          display: 'none'
        }}
      />
      <SettingsWrapper>
        <Setting>
          <Label>Tema</Label>
        </Setting>
        <Separator />
        <Setting>
          <Label>Idioma</Label>
        </Setting>
        <Separator />
        <Setting>
          <Label>Notificações</Label>
          {Platform.OS === 'ios' ? <Switch /> : <SwitchButton />}
        </Setting>
      </SettingsWrapper>
      <Logout onPress={handleLogout}>
        <LogoutLabel>Sair</LogoutLabel>
      </Logout>
    </Container>
  );
}
