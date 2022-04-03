import React, {FC} from "react";

import { 
    Container,
    Title,
    Icon,
    ContentWrapper
} from "./styles";

import Clipboard from '../../assets/clipboard.svg';
import Printer from '../../assets/printer.svg';
import FingerPrint from '../../assets/fingerprint.svg';
import Calendar from '../../assets/calendar.svg';
import Books from '../../assets/books.svg';
import Subject from '../../assets/subjects.svg';

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
}

const CategoryButton: FC<Props> = ({title, icon, ...props}) => {
    return(
        <Container {...props}>
            <ContentWrapper>
                {iconComponents[icon]}
                <Title>{title}</Title>
            </ContentWrapper>
            <Icon name="chevron-right"/>
        </Container>
    )
}

export default CategoryButton;