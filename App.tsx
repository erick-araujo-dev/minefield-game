import { Dimensions, StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';
import Flag from './src/components/Flag';
import { cloneBoard, createMinedBoard, hadExplosion, openField, showMines, wonGame } from './src/functions';
import { useState } from 'react';
import { createErrorHandler } from 'expo/build/errors/ExpoErrorManager';
import MineField from './src/components/MineField';
import { SafeAreaView } from 'react-native';

export default function App() {
  const minesAmount = () => {
    const rows = params.getRowsAmount();
    const columns = params.getRowsAmount();
    return Math.ceil(columns * rows * params.difficultLevel)
  }

  const createState = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnAmount();
    
    return {
      board: createMinedBoard(rows, columns, minesAmount()),
      won: false,
      lost: false
    };
  }

  const [state, setState] = useState(createState());

  const onOpenField = (row: number, column: number) => {
    const board = cloneBoard(state.board)
    openField(board, row, column)
    
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert("Você perdeu !!!")
    }
    if(won){
      Alert.alert("Você venceu !!!")

    }

    setState({board, won, lost})
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>
          Iniciando o Mine Field
        </Text>
        <Text style={styles.instructions}>
          Tamanho da grade: {params.getRowsAmount()} x {params.getColumnAmount()}
        </Text>
        <View style={styles.board}>
          <MineField onOpenField={onOpenField} board={state.board}/>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#AAA'

  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});


