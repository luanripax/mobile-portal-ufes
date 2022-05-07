import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
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
  New
} from './styles';
import If from '../../components/If';
import { Updater } from '../../components/Updater';
import { locale } from '../../locale';

export function Home({ navigation }) {

  const { user, info } = useStores();
  const { boardNews } = info;
  const { userInfo } = user;

  const [openBoard, setOpenBoard] = useState(false);
  const [,setUpdate] = useState(false);

  const handleNavigate = () => {
    navigation.navigate('Settings');
  };

  return (
    <Container>
      <Header>
        <PersonalInfo>
          <Title>{`${locale('general.greetings')}, ${userInfo.firstname}`}</Title>
          <TouchableOpacity onPress={handleNavigate}>
            <Icon name="settings" />
          </TouchableOpacity>
        </PersonalInfo>

        <CourseInfo>
          <CourseLabel>{locale('general.course')}</CourseLabel>
          <Course>{locale(`courses.${userInfo.course.code}`)}</Course>
        </CourseInfo>
      </Header>

      <ImportantInfo>
        <ImportantLabel>{locale('home.importantLabel')}</ImportantLabel>
        <CategoryButton title={locale('home.enrollment')}icon="registry" />
      </ImportantInfo>

      <BoardInfo>
        <BoardLabel>{locale('home.boardLabel')}</BoardLabel>
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
        <SubjectLabel>{locale('home.progressLabel')}</SubjectLabel>
        <ProgressCard />
      </SubjectInfo>

      <Updater update={setUpdate}/>
    </Container>
  );
}
