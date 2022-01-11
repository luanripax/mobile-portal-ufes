import React from "react";
import {StatusBar} from 'react-native';

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
    BoardLabel
 } from "./styles";


export function Home() {
    return(
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor="transparent"
                translucent
            />
            <Header>

                <PersonalInfo>
                    <Title>Olá, Luan</Title>
                    <Icon name="settings"/>
                </PersonalInfo>

                <CourseInfo>
                    <CourseLabel>Curso</CourseLabel>
                    <Course>Ciência da computação</Course>
                </CourseInfo>

            </Header>

            <ImportantInfo>
                <ImportantLabel>Importantes</ImportantLabel>
                
            </ImportantInfo>

            <BoardInfo>
                <BoardLabel>Mural</BoardLabel>
            </BoardInfo>
                
            
        </Container>
    );
}