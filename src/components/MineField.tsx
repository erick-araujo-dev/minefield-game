import React from 'react';
import { View, StyleSheet } from 'react-native';
import Field from './Field';

interface MineFieldProps{
    board: any
}

const MineField:React.FC<MineFieldProps> = ({board}) => {
    const rows = board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}/>
        })
        return <View style={{flexDirection: "row"}} key={r}>{columns}</View>
    })
    return <View style={style.container}>{rows}</View>
};

const style = StyleSheet.create({
    container:{
        backgroundColor: "#EEE",
    }
})
export default MineField;