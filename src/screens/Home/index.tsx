import React from "react";
import {StatusBar} from 'react-native';
import CategoryButton  from "../../components/CategoryButton";
import { ProgressChart } from "react-native-chart-kit";
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

    const data = {
        labels: ["Optativas", "Obrigatórias", "Total"], // optional
        data: [0.8, 0.6, 0.4]
    };

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
                <CategoryButton title="Solicitação de matrícula" icon="registry"/>
            </ImportantInfo>

            <BoardInfo>
                <BoardLabel>Progresso</BoardLabel>
                <ProgressChart
                    data={data}
                    width={450}
                    height={220}
                    strokeWidth={16}
                    radius={32}
                    hideLegend={false}
                    chartConfig={{
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientToOpacity: 0,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    }}
                    style={{
                        marginVertical: 25,
                        right: 80,
                      }}
                />
            </BoardInfo>
                
        </Container>
    );
}