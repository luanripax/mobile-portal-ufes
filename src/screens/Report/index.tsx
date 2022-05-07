import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { locale } from '../../locale';

import {
  Container,
  MainHeader,
  BodyWrapper,
} from './styles';
import { DropDown } from '../../components/DropDown';
import { Button } from './styles';

export function Report({navigation}) {
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('history');
  const [items, setItems] = useState([
    { label: locale('report.history'), value: 'history' },
    { label: locale('report.schedule'), value: 'schedule' },
    { label: locale('report.curriculum'), value: 'curriculum' },
    { label: locale('report.temp'), value: 'temp' },
    { label: locale('report.register-file'), value: 'register-file' },
    { label: locale('report.integral'), value: 'integral' },
    { label: locale('report.receipt'), value: 'receipt' },
    { label: locale('report.certificate'), value: 'certificate' },
    { label: locale('report.recognize-certificate'), value: 'recognize-certificate' }
  ]);

  const handlePress = () => {
    navigation.navigate('PdfViewer', { title: items.find(item => item.value === value).label, tag: value });
  };

  return (
    <Container>
    <MainHeader title={locale('report.title')} />

    <BodyWrapper>
      <View>
        <DropDown
          title={locale('report.report')}
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
        title={locale('general.viewPDF')}
        onPress={handlePress}
      />
    </BodyWrapper>
  </Container>
  );
}