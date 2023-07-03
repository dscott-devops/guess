import React from 'react'
import { Pressable, View, Text } from 'react-native';
import styles from '../Styles/Styles';

const PrimaryButton = ({ name }) => {
    const pressHandler = () => {

        console.log("Pressed", name)
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={pressHandler}
                android_ripple={{ color: '#720610' }}>

                <Text style={styles.buttonText}>{name}</Text>

            </Pressable>
        </View>
    )
}

export default PrimaryButton