import React, { useState } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Text,
  View
} from 'react-native';
import CategoryButton from '../../components/CategoryButton';
import { SubjectCard } from '../../components/SubjectCard';
import { NavigationAction, useNavigation } from '@react-navigation/native';
import { ProgressChart } from 'react-native-chart-kit';
import { useStores } from '../../hooks/useStores';
import * as Progress from 'react-native-progress';
import {
  Container,
  Title,
  Header,
  PersonalInfo,
  Icon,
  CourseInfo,
  CourseLabel,
  Course,
  ImportantInfo,
  ImportantLabel,
  BoardInfo,
  BoardLabel,
  SubjectInfo,
  SubjectLabel,
  SContainer,
  STitle,
  SContent,
  AbscenceContainer,
  AbscenceLabel,
  AbscenceValue,
  STitleContainer
} from './styles';
import If from '../../components/If';

export function Home({ navigation }) {

  const { user, info } = useStores();

  const data = {
    labels: ['Optativas', 'Obrigatórias', 'Total'], // optional
    data: [0.8, 0.6, 0.4]
  };

  /*const boardNews = [
    '• O período de matricula 3022/1 começa sexta feira, favor nao se atrasem para tla',
    '• A colação de grau poderá acontecer a qualquer momento então fique atento !',
    '• A colação de grau poderá acontecer a qualquer momento então fique atento !',
    '• A colação de grau poderá acontecer a qualquer momento então fique atento !',
    '• A colação de grau poderá acontecer a qualquer momento então fique atento !',
    '• A colação de grau poderá acontecer a qualquer momento então fique atento !'
  ];*/
  const { boardNews } = info;

  const [openBoard, setOpenBoard] = useState(false);

  const handleNavigate = () => {
    navigation.navigate('Settings');
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <PersonalInfo>
          <Title>{`Olá, ${user.userInfo.firstname}`}</Title>
          <TouchableOpacity onPress={handleNavigate}>
            <Icon name="settings" />
          </TouchableOpacity>
        </PersonalInfo>

        <CourseInfo>
          <CourseLabel>Curso</CourseLabel>
          <Course>{user.userInfo.course}</Course>
        </CourseInfo>
      </Header>

      <ImportantInfo>
        <ImportantLabel>Importantes</ImportantLabel>
        <CategoryButton title="Solicitação de matrícula" icon="registry" />
      </ImportantInfo>

      <SubjectInfo>
        <SubjectLabel>Mural</SubjectLabel>
        <If condition={!openBoard}>
          <SContainer>
            <Text style={{ color: 'white', marginBottom: 10 }}>
              {boardNews[0].new}
            </Text>
            <TouchableOpacity onPress={() => setOpenBoard(true)}>
              <Icon name="chevron-down" />
            </TouchableOpacity>
          </SContainer>
        </If>

        <If condition={openBoard}>
          <SContainer>
            {boardNews.map((item) => (
              <Text key={item.id} style={{ color: 'white', marginBottom: 20 }}>{item.new}</Text>
            ))}
            <TouchableOpacity onPress={() => setOpenBoard((old) => !old)}>
              <Icon name="chevron-up" />
            </TouchableOpacity>
          </SContainer>
        </If>

        {/*<SContent>
              <AbscenceContainer>
                <AbscenceLabel>Faltas</AbscenceLabel>
                <Progress.Bar
                  progress={0.4}
                  width={100}
                  height={5}
                  borderColor="grey"
                  unfilledColor="black"
                  borderWidth={0}
                  color="orange"
                />
                <AbscenceValue>2/7</AbscenceValue>
              </AbscenceContainer>
              <AbscenceContainer>
                <AbscenceLabel>Média</AbscenceLabel>
                <Progress.Bar
                  progress={0.4}
                  width={100}
                  height={5}
                  borderColor="grey"
                  unfilledColor="black"
                  borderWidth={0}
                  color="white"
                />
                <AbscenceValue>2/7</AbscenceValue>
              </AbscenceContainer>
            </SContent>*/}
      </SubjectInfo>

      <BoardInfo>
        <BoardLabel>Progresso</BoardLabel>
        <SubjectCard />
      </BoardInfo>
    </Container>
  );
}
