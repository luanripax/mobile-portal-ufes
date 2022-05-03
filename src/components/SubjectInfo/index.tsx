import React, {FC, useEffect, useState} from "react";
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
import theme from "../../styles/theme";

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
    average: number;
    absences: number;
    maxAbsences: number;
}

const SubjectInfo: FC<Props> = ({
    title, 
    icon, 
    average,
    absences,
    maxAbsences,
    ...props}) => {

    const [active, setActive] = useState(false);

    const getAbsenceWarningColor = () => {
        let color = '';
        const percentage = absences/maxAbsences;
        if(percentage <= 0.25 || percentage < 0.5)
            color = theme.colors.dark.success;
        if(percentage >= 0.5)
            color = 'orange'
        if(percentage >= 0.75)
            color = theme.colors.dark.error;
        return color;
    }

    return(
        <>
            <If condition={active}>
                <Container {...props} onPress={() => setActive(false)}>
                    <ContentWrapper active={active}>
                        <Title>{title}</Title>
                        <InfoWrapper>
                            <AverageWrapper>
                                <AverageLabel>Média</AverageLabel>
                                <Average>{average}</Average>
                           </AverageWrapper>
                           <AbscenceWrapper>
                                <AbscenceLabel>Faltas</AbscenceLabel>
                                <Abscence warningColor={getAbsenceWarningColor}>
                                    {`${absences}/${maxAbsences}`}
                                </Abscence>
                           </AbscenceWrapper>
                        </InfoWrapper>
                    </ContentWrapper>
                    <Icon name="chevron-up"/>
                </Container>
            </If>
            <If condition={!active}>
                <Container {...props} onPress={() => setActive(true)}>
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