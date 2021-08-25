import styled from 'styled-components/native';
import {
    RFPercentage,
    RFValue
} from 'react-native-responsive-fontsize'


export const Container = styled.View`
    flex: 1;
    background-color: #F0F2F5;   
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: #5636D3;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const UserContainer = styled.View`
    width: 100%;  
`;

export const UserIfo = styled.View`
flex-direction: row;
align-items: center;

`;
export const Photo = styled.Image`
width: ${RFValue(48)}px;
height: ${RFValue(48)}px;
border-radius: 10px;
margin-left: 24px;

`;

export const User = styled.View`
margin-left: 17px;

`;

export const UserGreeting = styled.Text`
    font-size: ${RFValue(18)}px;
    color: #FFFFFF;
    font-family: 'Poppins_400Regular';
`;

export const Username = styled.Text`
    font-size: ${RFValue(24)}px;
    color: #FFFFFF;
    font-family: 'Poppins_700Bold';
`;




