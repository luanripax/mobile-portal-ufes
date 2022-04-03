import React, {FC} from "react";
import If from "../If";

import { 
    Container,
    Title,
    Icon,
    ContentWrapper,
    InfoWrapper,
    AverageWrapper,
    AbscenceWrapper,
    AverageLabel,
    AbscenceLabel,
    Average,
    Abscence
} from "./styles";

import Clipboard from '../../assets/clipboard.svg';
import Printer from '../../assets/printer.svg';
import FingerPrint from '../../assets/fingerprint.svg';
import Calendar from '../../assets/calendar.svg';
import Books from '../../assets/books.svg';
import Subject from '../../assets/subjects.svg';
import { Text, View } from "react-native";

const iconComponents = {
    registry: <Clipboard />,
    report: <Printer />,
    calendar: <Calendar />,
    offer: <Books />,
    identity: <FingerPrint />,
    subject: <Subject />
}

interface Props {
    title: string;
    icon: string;
    active: boolean;
}

const SubjectInfo: FC<Props> = ({title, icon, active, ...props}) => {
    return(
        <>
            <If condition={active}>
                <Container {...props}>
                    <ContentWrapper active={active}>
                        <Title>{title}</Title>
                        <InfoWrapper>
                            <AverageWrapper>
                                <AverageLabel>Média</AverageLabel>
                                <Average>6.7</Average>
                           </AverageWrapper>
                           <AbscenceWrapper>
                                <AbscenceLabel>Faltas</AbscenceLabel>
                                <Abscence>2/6</Abscence>
                           </AbscenceWrapper>
                        </InfoWrapper>
                    </ContentWrapper>
                    <Icon name="chevron-up"/>
                </Container>
            </If>
            <If condition={!active}>
                <Container {...props}>
                    <ContentWrapper>
                        <Title>{title}</Title>
                    </ContentWrapper>
                    <Icon name="chevron-down"/>
                </Container>
            </If>
        </>
    )
}

export default SubjectInfo;