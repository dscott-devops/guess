import React from 'react'
import { TextInput, Text, View } from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';
import styles from '../Styles/Styles';


const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
            />
            <PrimaryButton name="Reset" />
            <PrimaryButton name="Confirm" />
        </View>
    )
}

export default StartGameScreen