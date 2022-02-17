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
  const [value2, setValue2] = useState('history');
  const [items2, setItems2] = useState([
    { label: 'Histórico parcial', value: 'history' },
    { label: 'Grade Horário Individual', value: 'schedule' },
    { label: 'Currículo de cursos', value: 'curriculum' },
    { label: 'Comprovante de matrícula provisório', value: 'temp' },
    { label: 'Ficha Cadastral do Aluno', value: 'register-file' },
    { label: 'Integralização curricular', value: 'integral' },
    { label: 'Comprovante de solicitação', value: 'receipt' },
    { label: 'Atestado de Matrícula', value: 'certificate' },
    { label: 'Atestado de Reconhecimento', value: 'recognize-certificate' }
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

  const handlePress = () => {
    console.log('pressed');
  };

  return (
    <>
      <If condition={tag === 'offer'}>
        <Container>
          <MainHeader title="Oferta - 2022/1" />

          <BodyWrapper>
            <View>
              <DropDown
                title="Tipo de oferta"
                maxHeight={85}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
              <If condition={value === 'apple3'}>
                <DropDown
                  title="Curso"
                  maxHeight={85}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </If>
              <If condition={value === 'apple4'}>
                <DropDown
                  title="Disciplina"
                  maxHeight={85}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </If>
              <If condition={value === 'apple5'}>
                <DropDown
                  title="Departamento"
                  maxHeight={85}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </If>
            </View>
            <Button title="Visualizar PDF" color="#b51b28" />
          </BodyWrapper>
        </Container>
      </If>
      <If condition={tag === 'report'}>
        <Container>
          <MainHeader title="Oferta - 2022/1" />

          <BodyWrapper>
            <View>
              <DropDown
                title="Relatório"
                maxHeight={500}
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
              />
            </View>
            <Button
              title="Visualizar PDF"
              color="#b51b28"
              onPress={handlePress}
            />
          </BodyWrapper>
        </Container>
      </If>
    </>
  );
}
