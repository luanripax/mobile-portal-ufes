import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Header } from '../../components/Header';
import CategoryButton  from '../../components/CategoryButton';
import { getTheme } from '../../hooks/settings';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors[getTheme()].background_primary};
`;

export const HeaderComponent = styled(Header)`
    margin-bottom: 20px;
`;

export const ContentWrapper = styled.View`
    padding-horizontal: 10px;
`;

export const CategoryButtonFC = styled(CategoryButton)`
    margin-bottom: 20px;
`;