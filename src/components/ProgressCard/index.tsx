import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  Container,
  Abscence,
  Average,
} from './styles';
import * as Progress from 'react-native-progress';
import { locale } from '../../locale';

export function ProgressCard() {
  
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Container>

      <View style={{alignItems: 'center'}}>
      <Average>{locale('general.generalLabel')}</Average>
      <Progress.Circle
          progress={0.81}
          showsText
          size={80}
          formatText={(value) => '81%'}
          color="#03C4A1"
          indeterminate={load}
        />
      </View>

      <View style={{alignItems: 'center'}}>
      <Abscence>{locale('general.mandatoryLabel')}</Abscence>
      <Progress.Circle
          progress={0.68}
          showsText
          size={80}
          formatText={(value) => '68%'}
          color="#BC6FF1"
          indeterminate={load}
        />
      </View>

      <View style={{alignItems: 'center'}}>
      <Abscence>{locale('general.optionalLabel')}</Abscence>
      <Progress.Circle
          progress={0.75}
          showsText
          size={80}
          formatText={(value) => '75%'}
          color="#C62A88"
          indeterminate={load}
        />
      </View>
    </Container>
  );
}
