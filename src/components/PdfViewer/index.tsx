import React, { useEffect, useState } from 'react';
import { useSetting } from '../../hooks/settings';
import { View, Text, Platform, Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
  DropDown,
  Value,
  ValueTitle,
  Icon
} from './styles';
import If from '../../components/If';
import { locale } from '../../locale';
import PDFReader from 'rn-pdf-reader-js';

export function PdfViewer({ navigation, route }) {
  const { appTheme, setAppTheme, idiom, setIdiom } = useSetting();
  const [update, setUpdate] = useState(false);
  const { title } = route.params;

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

  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true
  };

  return (
    <Container>
      <MainHeader title={title} />
      <PDFReader source={source} useGoogleReader noLoader={false} />
    </Container>
  );
}
