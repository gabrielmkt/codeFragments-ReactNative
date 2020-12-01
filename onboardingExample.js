import React from 'react'
import { AsyncStorage, Alert, View, Text, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

import {PageTwo, PageThree, PageOne} from './pages';

import styles from './styles';


export default function OnboardingScreen({ navigation }) {

    async function completeOnboarding(e) {
        await AsyncStorage.setItem('hasOnboarded', JSON.stringify({
            hasOnboarded: true
        }));

        navigation.navigate('Auth')

    }

    const Done = () => (
        <TouchableOpacity onPress={completeOnboarding}>
            <Text style={styles.textDone}>
                Concluir
            </Text>
        </TouchableOpacity>
    )

    return (
        <Onboarding
            nextLabel={"Próximo"}
            skipLabel={"Pular"}
            DoneButtonComponent={Done}
            onDone={completeOnboarding}
            onSkip={completeOnboarding}
            pages={[
                {
                    backgroundColor: '#44423E',
                    image: <PageOne />,
                    title: '',
                    subtitle: ''
                },
                {
                    backgroundColor: '#44423E',
                    image: <PageTwo />,
                    title: '',
                    subtitle: ''
                },
                {
                    backgroundColor: '#44423E',
                    image: <PageThree />,
                    title: '',
                    subtitle: ''
                },
            ]}
        />
    );
};
