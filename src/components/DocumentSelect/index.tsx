import React, { useEffect, useState } from 'react';
import { useSetting } from '../../hooks/settings';
import { View, Text, Platform, Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
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
  Value,
  ValueTitle,
  Icon,
  BodyWrapper,
  OfferType,
  ButtonLabel
} from './styles';
import If from '../../components/If';
import { locale } from '../../locale';
import { Button } from '../Button';
import { DropDown } from '../DropDown';

export function DocumentSelect({ navigation, route }) {
  const { appTheme, setAppTheme, idiom, setIdiom } = useSetting();
  const [update, setUpdate] = useState(false);
  const { tag, title } = route.params;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('apple');
  const [items, setItems] = useState([
    { label: 'Oferta do seu curso', value: 'apple' },
    { label: 'Grade de oferta', value: 'banana' },
    { label: 'Oferta por curso', value: 'apple3' },
    { label: 'Oferta por disciplina de curso', value: 'apple4' },
    { label: 'Oferta por departamento', value: 'apple5' }
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState('apple');
  const [items2, setItems2] = useState([
    { label: 'Oferta do seu curso', value: 'apple' },
    { label: 'Grade de oferta', value: 'banana' },
    { label: 'Oferta de outros cursos', value: 'apple2' }
  ]);

  const changeTheme = (theme: string) => {
    setAppTheme(theme);
  };

  const changeIdiom = (selectedIdiom: string) => {
    setIdiom(selectedIdiom);
  };

  useEffect(() => {
    setUpdate((old) => !old);
  }, [idiom, appTheme]);

  const isDark = appTheme === 'dark';
  const isEnglish = idiom === 'en_US';

  return (
    <>
      <If condition={tag === 'offer'}>
        <Container>
          <MainHeader title="Oferta - 2022/1" />

          <BodyWrapper>
            <View>
              <DropDown
                title="Tipo de oferta"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            <Button title="Visualizar PDF" color="#b51b28" />
          </BodyWrapper>
        </Container>
      </If>
    </>
  );
}
