import React from 'react';
import {View , StyleSheet, Text,  TouchableWithoutFeedback } from 'react-native';
import params from '../constants/params';
import Mine from './Mine';
import Flag from './Flag';

interface FieldProps{
    mined?: boolean,
    opened?: boolean,
    nearMines?: number,
    exploded?: boolean,
    flagged?: boolean,
    onOpen: () => void,
    onSelect: () => void,
}

const Field:React.FC<FieldProps> = ({mined, opened, nearMines, exploded, flagged, onOpen, onSelect}) => {
    const styleField = [styles.field]
    if(opened) styleField.push(styles.opened);
    if(exploded) styleField.push(styles.exploded)
    if(flagged) styleField.push(styles.flagged)
    if(!opened && !exploded) styleField.push(styles.regular)

    let color = null;
    if(nearMines > 0){
        if(nearMines == 1){
            color = "#2A2807"
        }else if(nearMines == 2){
            color = "#285207"
        } else if(nearMines > 2 && nearMines < 6){
            color = "#F9060A"
        } else if(nearMines >= 6){
            color = "#F221A9"
        }
    }
    return (
        <TouchableWithoutFeedback onPress={onOpen}
        onLongPress={onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ? (
                    <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
                    ) : false}
                {mined && opened ? <Mine/> : false}
                {!opened && flagged ? <Flag/> : false}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    field:{
        width: params.blockSize,
        height: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular:{
        backgroundColor: "#999",
        borderBottomColor: "#333",
        borderRightColor: "#333",
        borderLeftColor: "#CCC",
        borderTopColor: "#CCC",
    },
    opened:{
        backgroundColor: "#999",
        borderColor: "#777",
        alignItems: "center",
        justifyContent: "center"
    }, 
    label:{
        fontWeight: "bold",
        fontSize: params.fontSize,
    },
    exploded:{
        backgroundColor: "red",
        borderColor: "brown"
    }

})

export default Field;