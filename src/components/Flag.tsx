import React from 'react';
import { View, StyleSheet} from 'react-native';

interface FlagProps{
    bigger?: boolean
}
const Flag:React.FC<FlagProps> = ({bigger}) => {
    return (
        <View style={style.container}>
            <View style={[style.flag, bigger ? style.flagBigger : null]}></View>
            <View style={[style.flagPole, bigger ? style.flagpoleBigger : null]}></View>
            <View style={[style.base1, bigger ? style.base1Bigger : null]}></View>
            <View style={[style.base2, bigger ? style.base2Bigger : null]}></View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    flag:{
        position: "absolute",
        height: 10,
        width: 12,
        backgroundColor: "#F22",
        marginLeft: 6
    },
    flagPole:{
        position: "absolute",
        height: 24,
        width: 4,
        backgroundColor: "#222",
        marginLeft: 18
    },
    base1:{
        position: "absolute",
        height: 4,
        width: 12,
        backgroundColor: "#222",
        marginLeft: 14,
        marginTop: 20,
    },
    base2:{
        position: "absolute",
        height: 4,
        width: 20,
        backgroundColor: "#222",
        marginLeft: 10,
        marginTop: 24,
    },  
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12,
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24
    }

})

export default Flag;