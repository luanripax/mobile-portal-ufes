import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Text,
  View
} from 'react-native';
import CategoryButton from '../../components/CategoryButton';
import { ProgressCard } from '../../components/ProgressCard';
import { useStores } from '../../hooks/useStores';
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
  STitleContainer,
  New
} from './styles';
import If from '../../components/If';
import { useSetting } from '../../hooks/settings';

export function Home({ navigation }) {

  const { user, info } = useStores();
  const {appTheme} = useSetting();
  const { boardNews } = info;
  const { userInfo } = user;

  const [openBoard, setOpenBoard] = useState(false);
  const [update, setUpdate] = useState(false);

  const data = {
    labels: ['Optativas', 'Obrigatórias', 'Total'], // optional
    data: [0.8, 0.6, 0.4]
  };

  const handleNavigate = () => {
    navigation.navigate('Settings');
  };

  useEffect(() => {
    setUpdate(old => !old);
  }, [appTheme]);

  return (
    <Container>
      <Header>
        <PersonalInfo>
          <Title>{`Olá, ${userInfo.firstname}`}</Title>
          <TouchableOpacity onPress={handleNavigate}>
            <Icon name="settings" />
          </TouchableOpacity>
        </PersonalInfo>

        <CourseInfo>
          <CourseLabel>Curso</CourseLabel>
          <Course>{userInfo.course.name}</Course>
        </CourseInfo>
      </Header>

      <ImportantInfo>
        <ImportantLabel>Importantes</ImportantLabel>
        <CategoryButton title="Solicitação de matrícula" icon="registry" />
      </ImportantInfo>

      <BoardInfo>
        <BoardLabel>Mural</BoardLabel>
        <If condition={!openBoard}>
          <SContainer>
            <New>
              {boardNews[0].new}
            </New>
            <TouchableOpacity onPress={() => setOpenBoard(true)}>
              <Icon name="chevron-down" />
            </TouchableOpacity>
          </SContainer>
        </If>

        <If condition={openBoard}>
          <SContainer>
            {boardNews.map((item) => (
              <New key={item.id} style={{ marginBottom: 20 }}>{item.new}</New>
            ))}
            <TouchableOpacity onPress={() => setOpenBoard((old) => !old)}>
              <Icon name="chevron-up" />
            </TouchableOpacity>
          </SContainer>
        </If>
      </BoardInfo>

      <SubjectInfo>
        <SubjectLabel>Progresso</SubjectLabel>
        <ProgressCard />
      </SubjectInfo>
    </Container>
  );
}
