import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    inputContainer: {
        marginTop: 100,
        padding: 16,
        backgroundColor: '#4e0329',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 3,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 50

    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2

    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'

    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
        
    }

})

export default styles