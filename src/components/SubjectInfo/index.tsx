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

import theme from "../../styles/theme";
import { locale } from "../../locale";

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
                                <AverageLabel>{locale('subjects.average')}</AverageLabel>
                                <Average>{average}</Average>
                           </AverageWrapper>
                           <AbscenceWrapper>
                                <AbscenceLabel>{locale('subjects.absence')}</AbscenceLabel>
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