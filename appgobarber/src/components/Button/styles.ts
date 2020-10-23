import styled from 'styled-components/native';
//botão retangular
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    background: #ff9000;
    border-radius: 10px;
    margin-top: 8px;

    justify-content: center;
    align-items: center;   

`;

export const ButtonText = styled.Text`
    font-family: 'RobotoSlab-Medium Sans Serif';
    font-size: 20px;
    color: #312e38;
`;