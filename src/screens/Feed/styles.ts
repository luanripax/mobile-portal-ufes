import styled from 'styled-components/native';
import { Header } from '../../components/Header';
import { getTheme } from '../../hooks/settings';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors[getTheme()].background_primary};
`;

export const MainHeader = styled(Header)`
    margin-bottom: 10px;
`;

export const LoadingWrapper = styled.View`
    flex: 1;
    justify-content: center;
`;