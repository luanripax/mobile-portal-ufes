import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  Container,
  Title,
  Icon,
  TitleWrapper,
  IconWrapper,
  Abscence,
  Average,
  LabelWrapper,
  ContentWrapper,
  ProgressWrapper,
  ProgressValue
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';


export function ProgressCard() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const formatProgress = (value) => {
    return `${value * 100}%`;
  };

  const [general, setGeneral] = useState(0.2);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    //setGeneral(0.6);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Container>

      <View style={{alignItems: 'center'}}>
      <Average>Geral</Average>
      <Progress.Circle
          progress={0.3}
          showsText
          size={80}
          formatText={(value) => '60%'}
          color="#03C4A1"
          indeterminate={load}
        />
      </View>

      <View style={{alignItems: 'center'}}>
      <Abscence>Obrigatórias</Abscence>
      <Progress.Circle
          progress={0.6}
          showsText
          size={80}
          formatText={(value) => '50%'}
          color="#BC6FF1"
          indeterminate={load}
        />
      </View>

      <View style={{alignItems: 'center'}}>
      <Abscence>Optativas</Abscence>
      <Progress.Circle
          progress={0.4}
          showsText
          size={80}
          formatText={(value) => '40%'}
          color="#C62A88"
          indeterminate={load}
        />
      </View>


      {/*
      <LabelWrapper>
        <Average>Geral</Average>
        <Abscence>Obrigatórias</Abscence>
        <Abscence>Optativas</Abscence>
      </LabelWrapper>
      <ContentWrapper>
        <Progress.Circle
          progress={0.3}
          showsText
          size={80}
          formatText={(value) => '60%'}
          color="#03C4A1"
          indeterminate={load}
        />
        <Progress.Circle
          progress={0.6}
          showsText
          size={80}
          formatText={(value) => '50%'}
          color="#BC6FF1"
          indeterminate={load}
        />
        <Progress.Circle
          progress={0.4}
          showsText
          size={80}
          formatText={(value) => '40%'}
          color="#C62A88"
          indeterminate={load}
        />
        </ContentWrapper>*/}

      {/*
      <Abscence>Faltas</Abscence>
      <ProgressBar
        progress={0.4}
        width={350}
        height={14}
        borderColor="grey"
        unfilledColor="black"
        borderWidth={0}
        color="orange"
      />
      <Average>Média</Average>
      <ProgressBar
        progress={0.8}
        width={350}
        height={14}
        borderColor="grey"
        unfilledColor="black"
        borderWidth={0}
        color="#7289da"
      />*/}
      {/*
      <LabelWrapper>
        <Average>Média</Average>
        <Abscence>Faltas</Abscence>
      </LabelWrapper>
      <ContentWrapper>*/}
      {/*<Progress.Circle
          progress={0.4}
          showsText
          size={80}
          formatText={formatProgress}
        />*/}
      {/*
      <Progress.Bar
        progress={0.4}
        width={100}
        height={10}
        borderColor="grey"
        unfilledColor="black"
        borderWidth={0}
        style={{ height: 10 }}
      />
      <Progress.Bar
        progress={0.4}
        width={100}
        height={10}
        borderColor="grey"
        unfilledColor="black"
        borderWidth={0}
        color="green"
        style={{ height: 10 }}
        />*/}
      {/*}
      </ContentWrapper>
      <LabelWrapper>
        <Average>6.75/10</Average>
        <Abscence>2/7</Abscence>
    </LabelWrapper>*/}
    </Container>
  );
}
