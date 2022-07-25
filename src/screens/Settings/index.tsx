import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Platform, Switch } from 'react-native';
import { locale } from '../../locale';
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
import { StackActions, CommonActions } from '@react-navigation/native';

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
  const [update, setUpdate] = useState(false);
  const { appTheme, idiom, allowNotify, setAllowNotify } = useSetting();

  const handleLogout = () => {
    //navigation.setOptions({ state: isDark, toggle: toggleTheme });
    //wconsole.log(route);
    //navigation.navigate('Login');
    navigation.dispatch(CommonActions.reset({
      routes: [
        { name: 'Login' },
      ],
    }));
  };

  const toggleSwitch = () => setAllowNotify((previousState) => !previousState);

  const themeName =
    appTheme === 'dark' ? locale('themes.dark') : locale('themes.light');
  const idiomName =
    idiom === 'en_US' ? locale('idioms.en_US') : locale('idioms.pt_BR');

  useEffect(() => {
    setUpdate((old) => !old);
  }, [appTheme, idiom]);

  return (
    <Container>
      <MainHeader title={locale('settings.title')} />
      <SettingsWrapper>
        <Setting>
          <Label>{locale('settings.theme')}</Label>
          <Value
            onPress={() =>
              navigation.navigate('SelectScreen', {
                title: locale('settings.theme'),
                type: 'theme'
              })
            }
          >
            <ValueTitle>{themeName}</ValueTitle>
            <Icon name="chevron-right" />
          </Value>
        </Setting>
        <Separator />
        <Setting>
          <Label>{locale('settings.idiom')}</Label>
          <Value
            onPress={() =>
              navigation.navigate('SelectScreen', {
                title: locale('settings.idiom'),
                type: 'idiom'
              })
            }
          >
            <ValueTitle>{idiomName}</ValueTitle>
            <Icon name="chevron-right" />
          </Value>
        </Setting>
        <Separator />
        <Setting>
          <Label>{locale('settings.notification')}</Label>
          {Platform.OS === 'ios' ? (
            <Switch value={allowNotify} onValueChange={toggleSwitch} />
          ) : (
            <SwitchButton value={allowNotify} onValueChange={toggleSwitch} />
          )}
        </Setting>
        <Separator />
        <Setting>
          <Label>{locale('settings.about')}</Label>
        </Setting>
      </SettingsWrapper>
      <Logout onPress={handleLogout}>
        <LogoutLabel>{locale('settings.leave')}</LogoutLabel>
      </Logout>
    </Container>
  );
}
