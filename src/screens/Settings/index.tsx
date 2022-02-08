import React, { useState, useContext } from 'react';
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
  DropDown,
  Value,
  ValueTitle,
  Icon
} from './styles';
import { useSetting } from '../../hooks/settings';

export function Settings({ navigation, route }) {
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

  //const navigation = useNavigation();
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const { appTheme, idiom, allowNotify, setAllowNotify } = useSetting();
  const [items, setItems] = useState([
    { label: 'Escuro', value: 'apple' },
    { label: 'Claro', value: 'banana' }
  ]);

  const toggleTheme = () => {
    setIsDark((oldstate) => !oldstate);
  };

  const handleLogout = () => {
    //navigation.setOptions({ state: isDark, toggle: toggleTheme });
    //wconsole.log(route);
    navigation.navigate('Login');
  };

  const handleChangeSwitch = (value: boolean) => {
    console.log(value);
    setAllowNotify(value);
  };

  const toggleSwitch = () => setAllowNotify((previousState) => !previousState);

  return (
    <Container>
      <MainHeader title="Configurações" />
      {/*
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
      />*/}
      <SettingsWrapper>
        <Setting>
          <Label>Tema</Label>
          <Value
            onPress={() =>
              navigation.navigate('SelectScreen', {
                title: 'Tema',
                type: 'theme'
              })
            }
          >
            <ValueTitle>{appTheme}</ValueTitle>
            <Icon name="chevron-right" />
          </Value>
        </Setting>
        <Separator />
        <Setting>
          <Label>Idioma</Label>
          <Value>
            <ValueTitle>{idiom}</ValueTitle>
            <Icon name="chevron-right" />
          </Value>
        </Setting>
        <Separator />
        <Setting>
          <Label>Notificações</Label>
          {Platform.OS === 'ios' ? (
            <Switch value={allowNotify} onValueChange={toggleSwitch} />
          ) : (
            <SwitchButton value={allowNotify} onValueChange={toggleSwitch} />
          )}
        </Setting>
        <Separator />
        <Setting>
          <Label>Sobre</Label>
        </Setting>
      </SettingsWrapper>
      <Logout onPress={handleLogout}>
        <LogoutLabel>Sair</LogoutLabel>
      </Logout>
    </Container>
  );
}
