import React from 'react';
import {
    View,
    Text,
    SafeAreaView,

} from 'react-native';
import styles from './styles';
import { Button } from '../../components/Button';


const Confirmation = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito cuidado.
                </Text>

                <View style={styles.ButtonContainer}>
                    <Button title='Começar' />
                </View>

            </View>
        </SafeAreaView>
    );
}

export default Confirmation;