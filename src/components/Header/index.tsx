import React from "react";

import { Container, Title } from './styles';

interface Props {
    title: string;
}

export function Header({title, ...props}: Props) {
    return(
        <Container {...props}>
            <Title>{title}</Title>
        </Container>
    );
}

