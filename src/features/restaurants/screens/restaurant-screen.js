import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import React from 'react';
import {
    StyleSheet,
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Platform
} from 'react-native';
import styled from 'styled-components/native';

import RestaurantInfoCard from '../components/restaurant-info-card-component';


const SafeArea = styled(SafeAreaView)`
flex:1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
flex: 1;
padding: ${(props) => props.theme.space[3]}; 
`;

export const RestaurantScreen = () => {

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard />
            </RestaurantListContainer>
        </SafeArea>


    );
}


export default RestaurantScreen;


