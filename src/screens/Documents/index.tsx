import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  HeaderComponent,
  ContentWrapper,
  CategoryButtonFC
} from './styles';

interface CategoryProps {
  id: string;
  title: string;
  tag: string;
  action: string;
}

export function Documents({ navigation }) {
  const navigateToScreen = (screen: string, tag: string) => {
    navigation.navigate(screen, { tag: tag });
  };

  const showDocument = (tag: string) => {
    const docTitle = Categories.find((item) => item.tag === tag);
    navigation.navigate('PdfViewer', { title: docTitle.title, tag });
  };

  const handleAction = (item: CategoryProps) => {
    const action =
      item.action === 'navigate'
        ? navigateToScreen('DocumentSelect', item.tag)
        : showDocument(item.tag);
    return action;
  };

  const Categories = [
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
    },
    {
      id: '5',
      title: 'Progresso de disciplinas',
      tag: 'subject',
      action: 'navigate'
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
          data={Categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ContentWrapper>
    </Container>
  );
}
