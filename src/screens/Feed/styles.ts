import styled from 'styled-components/native';
import { Header } from '../../components/Header';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.dark.background_primary};
`;

export const MainHeader = styled(Header)`
    margin-bottom: 10px;
`;