import React, { useEffect, useState } from 'react';
import { View, Text, Platform, Switch, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {
  Container,
  MainHeader,
  ContentWrapper
} from './styles';
import If from '../../components/If';
import { locale } from '../../locale';
import PDFReader from 'rn-pdf-reader-js';
import { useStores } from '../../hooks/useStores';
import { showError } from '../../utils/flashMessages';

export function PdfViewer({ navigation, route }) {
  const { user } = useStores();
  const [Url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const { title, tag } = route.params;

  const getPdfUrl = async() => {
    try {
      setLoading(true);
      const url = await user.getRequestedDocumentURL(tag);
      setUrl(url);
      setLoading(false);
    } catch (err) {
      showError('Não foi possível carregar o documento');
      navigation.goBack();
    }
  }

  useEffect(() => {
    getPdfUrl();
  }, []);
  
  return (
    <Container>
      <MainHeader title={title} />
      <ContentWrapper>
        <If condition={loading}>
          <ActivityIndicator size="large" />
        </If>
        <If condition={!loading}>
          <PDFReader source={{uri: Url}} noLoader={true} />
        </If>
      </ContentWrapper>
    </Container>
  );
}
