import React, { useState } from 'react';
import styles from './styles';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,

} from 'react-native';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/core';


const Identification = () => {

    // VARS
    const navigation = useNavigation();



    //STATES
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();


    //FUNCTIONS
    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputchange(value: string) {
        setIsFilled(!!value); // as duas !! servem para transformar o valor em boleano sendo, esta preenchido é true, não esta false.  
        setName(value);
    }

    function handleNavigationToConfirmation() {
        navigation.navigate('Confirmation');
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>

                        <View style={styles.form}>

                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    😄
                            </Text>

                                <Text style={styles.title}>
                                    Como podemos {'\n'} chamar você ?
                            </Text>
                            </View>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && styles.openedInput

                                ]}
                                placeholder='Digite seu nome'
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputchange}
                            />

                            <View style={styles.buttonContainer}>
                                <Button
                                    title='Confirmar'
                                    onPress={handleNavigationToConfirmation}
                                />
                            </View>
                        </View>

                    </View>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Identification;