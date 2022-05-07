import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { StackHeader } from '../../components/StackHeader';
import If from '../../components/If';
import { locale } from '../../locale';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  Container,
  ContentWrapper,
  SubjectInfoFC,
  CategoryWrapper,
  CategoryIcon,
  CategoryTitle,
  CategoryLine
} from './styles';
import { useStores } from '../../hooks/useStores';
import { showError } from '../../utils/flashMessages';
import getSubjectIcon from '../../utils/subjectIcons';
import { Updater } from '../../components/Updater';

export function SubjectProgress() {
  
  const { user } = useStores();
  const [loaded, setLoaded] = useState(false);
  const [,setUpdate] = useState(false);

  const renderSubject = ({ item }) => (
    <SubjectInfoFC
      title={item.name}
      icon={item.tag}
      average={item.average}
      absences={item.absences}
      maxAbsences={item.max_absence}
    />
  );

  const renderCategories = ({item}) => (
    <>
      <CategoryWrapper >
        <CategoryIcon name={getSubjectIcon(item.department)}/>
        <CategoryTitle>{locale(`subjects.${item.department}`)}</CategoryTitle>
      </CategoryWrapper>
      <CategoryLine />
      <ContentWrapper>
        <FlatList
            data={item.subjectList}
            renderItem={renderSubject}
            keyExtractor={(item) => item.id}
          />
      </ContentWrapper>
    </>
  );

  const getUserSubjects = async() => {
    try {
      await user.getUserSubjects();
      setLoaded(true);
    } catch (err) {
      showError(err.message);
    }
  }

  useEffect(() => {
    getUserSubjects();
  }, []);

  return (
    <Container>
      <StackHeader title={locale('general.subjects')}/>
      <If condition={loaded}>
        <CategoryWrapper >
        <FlatList
            data={user.userSubjects}
            renderItem={renderCategories}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
        </CategoryWrapper>
      </If>
      <If condition={!loaded}>
        <ActivityIndicator size="large" />
      </If>
      <Updater update={setUpdate} />
    </Container>
  );
}