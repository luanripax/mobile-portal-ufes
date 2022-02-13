import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${({color}) => color};
    border-radius: 5px;
    align-items: center;
    padding-vertical: 12px;
`;

export const Label = styled.Text`
    color: white;
`;