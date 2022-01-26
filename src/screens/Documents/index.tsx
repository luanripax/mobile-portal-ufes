import React from "react";
import { Header } from "../../components/Header";
import  CategoryButton  from "../../components/CategoryButton";
import { FlatList } from "react-native";
import getIcon from '../../utils/icons';

import {Container, HeaderComponent, ContentWrapper, CategoryButtonFC} from './styles';

export function Documents() {

    const DATA = [
        {
          id: '1',
          title: 'Identidade UFES',
          tag: 'identity'
        },
        {
            id: '2',
            title: 'Oferta',
            tag: 'offer'
        },
        {
            id: '3',
            title: 'Relatórios',
            tag: 'report'
        },
        {
            id: '4',
            title: 'Calendário acadêmico',
            tag: 'calendar'
        },
    ];

    const renderItem = ({ item }) => (
        <CategoryButtonFC title={item.title} icon={item.tag}/>
    );

    return(
        <Container>
            <HeaderComponent title="Documentos"/>
            <ContentWrapper>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ContentWrapper>
            
        </Container>
    )
}