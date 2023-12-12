import React from 'react';
import { View, StyleSheet } from 'react-native';
import Field from './Field';

interface MineFieldProps{
    board: any,
    onOpenField: (row: number, column: number) => void
}

const MineField:React.FC<MineFieldProps> = ({board, onOpenField}) => {
    const rows = board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}
            onOpen={() => onOpenField(r, c)}/>
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