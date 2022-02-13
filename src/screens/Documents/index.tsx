import React from 'react';
import { Header } from '../../components/Header';
import CategoryButton from '../../components/CategoryButton';
import { FlatList } from 'react-native';
import getIcon from '../../utils/icons';

import {
  Container,
  HeaderComponent,
  ContentWrapper,
  CategoryButtonFC
} from './styles';

export function Documents({ navigation }) {
  const navigateToScreen = (screen: string, tag: string) => {
    navigation.navigate(screen, { tag: tag });
  };

  const showDocument = (document: string) => {
    console.log(document);
  };

  const handleAction = (item) => {
    const action =
      item.action === 'navigate'
        ? navigateToScreen('DocumentSelect', item.tag)
        : showDocument('oi');
    return action;
  };

  const DATA = [
    {
      id: '1',
      title: 'Identidade UFES',
      tag: 'identity',
      action: 'show'
    },
    {
      id: '2',
      title: 'Oferta',
      tag: 'offer',
      action: 'navigate'
    },
    {
      id: '3',
      title: 'Relatórios',
      tag: 'report',
      action: 'navigate'
    },
    {
      id: '4',
      title: 'Calendário acadêmico',
      tag: 'calendar',
      action: 'show'
    }
  ];

  const renderItem = ({ item }) => (
    <CategoryButtonFC
      title={item.title}
      icon={item.tag}
      onPress={() => handleAction(item)}
    />
  );

  return (
    <Container>
      <HeaderComponent title="Documentos" />
      <ContentWrapper>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ContentWrapper>
    </Container>
  );
}
