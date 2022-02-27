import React from 'react';
import styles from './styles';
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    View,

} from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../../assets/watering.png';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {


    const navigation = useNavigation();


    function handleNavigationToIdentification() {
        navigation.navigate('UserIdentification');
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'} suas plantas de {'\n'} forma fácil
            </Text>

                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode='contain'
                />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
            </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleNavigationToIdentification}
                >
                    <Feather
                        name='chevron-right'
                        size={28}
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
