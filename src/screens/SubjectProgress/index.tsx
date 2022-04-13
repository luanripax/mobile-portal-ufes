import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import CategoryButton from '../../components/CategoryButton';
import SubjectInfo from '../../components/SubjectInfo';
import { FlatList, View, Text, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import getIcon from '../../utils/icons';
import { StackHeader } from '../../components/StackHeader';
import {Feather} from '@expo/vector-icons';
import If from '../../components/If';

import {
  Container,
  HeaderComponent,
  ContentWrapper,
  SubjectInfoFC,
  CategoryWrapper,
  CategoryIcon,
  CategoryTitle,
  CategoryLine
} from './styles';
import { useStores } from '../../hooks/useStores';
import { showError } from '../../utils/flashMessages';

export function SubjectProgress() {
  
  const { user } = useStores();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const renderSubject = ({ item }) => (
    <SubjectInfoFC
      title={item.name}
      icon={item.tag}
      active={item.id === 1 ? open : false}
      average={item.average}
      absences={item.absences}
      maxAbsences={item.max_absence}
    />
  );

  const renderCategories = ({item}) => (
    <>
      <CategoryWrapper >
        <CategoryIcon name="desktop-mac"/>
        <CategoryTitle>{item.department}</CategoryTitle>
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
      <StackHeader title="Disciplinas"/>
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
    </Container>
  );
}