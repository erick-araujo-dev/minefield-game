import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Flag from './Flag';
import { flagsUsed } from '../functions';
import params from '../constants/params';

interface HeaderProps{
    onFlagPress: () => void,
    flagsLeft: number,
    onNewGame: () => void,
}

const Header:React.FC<HeaderProps> = ({onFlagPress, flagsLeft, onNewGame}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onFlagPress} style={styles.flagContainer}>
                    <View style={styles.flagButton} >
                        <Flag bigger/>
                    </View>
                    <Text style={styles.flagsLeft}> 
                    = {flagsLeft}
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onNewGame}>
                <Text style={styles.buttonLabel}>
                    Novo Jogo
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingHorizontal: 15
        
    },
    flagContainer:{
        backgroundColor: "#999",
        borderBottomColor: "#333",
        borderRightColor: "#333",
        borderLeftColor: "#CCC",
        borderTopColor: "#CCC",
        width: params.blockSize * 3,
        height: params.blockSize,
        borderWidth: params.borderSize,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    flagButton:{
        marginBottom: 30,
        minWidth: 30
    },
    flagsLeft:{
        fontWeight: 'bold',
        color: "#000",
        fontSize: 15
    },
    button:{
        backgroundColor: "#999",
        borderBottomColor: "#333",
        borderRightColor: "#333",
        borderLeftColor: "#CCC",
        borderTopColor: "#CCC",
        width: params.blockSize * 3,
        height: params.blockSize,
        borderWidth: params.borderSize,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLabel: {
        fontWeight: 'bold',
        color: "#000",
        fontSize: 15
    }
})

export default Header;