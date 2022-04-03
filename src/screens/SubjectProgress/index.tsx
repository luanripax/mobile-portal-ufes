import React, { useState } from 'react';
import { Header } from '../../components/Header';
import CategoryButton from '../../components/CategoryButton';
import SubjectInfo from '../../components/SubjectInfo';
import { FlatList, View, Text, ScrollView, SafeAreaView } from 'react-native';
import getIcon from '../../utils/icons';
import { StackHeader } from '../../components/StackHeader';
import {Feather} from '@expo/vector-icons';

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

export function SubjectProgress() {
  

  const [open, setOpen] = useState(false);

  const DATA = [
    {
      id: '1',
      title: 'Inteligência Artificial',
      tag: 'identity',
      action: 'show'
    },
    {
      id: '2',
      title: 'Lógica para computação II',
      tag: 'offer',
      action: 'navigate'
    },
    {
      id: '3',
      title: 'Teoria da computação',
      tag: 'report',
      action: 'navigate'
    }
  ];

  const DATA2 = [
    {
      id: '4',
      title: 'Cálculo II',
      tag: 'calendar',
      action: 'show'
    },
    {
      id: '5',
      title: 'Álgebra linear',
      tag: 'subject',
      action: 'navigate'
    }
  ];


  const renderItem = ({ item }) => (
    <SubjectInfoFC
      title={item.title}
      icon={item.tag}
      active={item.id === '1' ? open : false}
      onPress={() => setOpen(old => !old)}
    />
  );

  return (
    <Container>
      <StackHeader title="Disciplinas"/>
      <ScrollView>
      <CategoryWrapper >
        <CategoryIcon name="desktop-mac"/>
        <CategoryTitle>Informática</CategoryTitle>
      </CategoryWrapper>
      <CategoryLine />
      <ContentWrapper>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ContentWrapper>
      <CategoryWrapper >
        <CategoryIcon name="pi"/>
        <CategoryTitle>Matemática</CategoryTitle>
      </CategoryWrapper>
      <CategoryLine />
      <ContentWrapper>
        <FlatList
          data={DATA2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ContentWrapper>
      </ScrollView>
    </Container>
  );
}