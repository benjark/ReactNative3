import {View, Text, Pressable, StyleSheet, TouchableWithoutFeedback} from 'react-native';

function PrimaryButton ({children}) {
    function pressHandler(){
        console.log('Pressed');
    }
    
    return (
    
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color:'640233'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    )
}

export default PrimaryButton;

const styles = StyleSheet.create({

    buttonOuterContainer:{
        borderRadius:28,
        margin: 4,
        overflow:'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin:4,
        elevation:10,
    },

    buttonText: {
        color:'white',
        textAlign:'center'
    }
})