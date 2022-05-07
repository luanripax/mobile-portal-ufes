import React, { useState } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  HeaderComponent,
  ContentWrapper,
  CategoryButtonFC
} from './styles';

import { Updater } from '../../components/Updater';
import { locale } from '../../locale';

interface CategoryProps {
  id: string;
  title: string;
  tag: string;
  action: string;
}

export function Documents({ navigation }) {
  
  const [,setUpdate] = useState(false);

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
      title: locale('documents.identity'),
      tag: 'identity',
      action: 'show'
    },
    {
      id: '2',
      title: locale('documents.offer'),
      tag: 'offer',
      action: 'navigate'
    },
    {
      id: '3',
      title: locale('documents.report'),
      tag: 'report',
      action: 'navigate'
    },
    {
      id: '4',
      title: locale('documents.calendar'),
      tag: 'calendar',
      action: 'show'
    },
    {
      id: '5',
      title: locale('documents.subjectProgress'),
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
      <HeaderComponent title={locale('general.documents')} />
      <ContentWrapper>
        <FlatList
          data={Categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ContentWrapper>
      <Updater update={setUpdate} />
    </Container>
  );
}
