import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { getTheme } from '../../hooks/settings';
import theme from "../../styles/theme";

interface IconProps {
    state: boolean;
}

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors[getTheme()].background_secondary};
    padding-horizontal: 20px;
    padding-vertical: 20px;
    border-radius: 5px;
    margin-horizontal: 10px;
    margin-bottom: 10px;
`;

export const PostedDate = styled.Text`
    color: grey;
    font-size: 13px;
`;

export const PostedContent = styled.Text`
    color: ${({theme}) => theme.colors[getTheme()].main_text};;
    margin-top: 5px;
    font-size: 15px;
`;

export const HeartIcon = styled(MaterialCommunityIcons)<IconProps>`
    color: ${({state}) => state ? theme.colors.dark.error : 'grey'};
    font-size: 15px;
`;

export const Likes = styled.Text`
    margin-left: 10px;
    color: grey;
`;

export const InteractWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;
