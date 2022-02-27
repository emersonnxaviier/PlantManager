import React from 'react';
import {
    StyleSheet,
    Dimensions

} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
    },

    text: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading
    },

});

export default styles;