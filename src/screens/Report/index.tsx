import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { StackHeader } from '../../components/StackHeader';
import If from '../../components/If';
import { locale } from '../../locale';

import {
  Container,
  MainHeader,
  BodyWrapper,
} from './styles';
import { useStores } from '../../hooks/useStores';
import { showError } from '../../utils/flashMessages';
import getSubjectIcon from '../../utils/subjectIcons';
import { DropDown } from '../../components/DropDown';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Report({navigation}) {
  
  const { user } = useStores();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('history');
  const [items, setItems] = useState([
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

  const handlePress = () => {
    navigation.navigate('PdfViewer', { title: items.find(item => item.value === value).label, tag: value });
  };

  return (
    <Container>
    <MainHeader title="Relatórios" />

    <BodyWrapper>
      <View>
        <DropDown
          title="Relatório"
          maxHeight={500}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <Button
        title="Visualizar PDF"
        color="#b51b28"
        onPress={handlePress}
      />
    </BodyWrapper>
  </Container>
  );
}