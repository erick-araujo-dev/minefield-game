import { Dimensions, StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';
import Flag from './src/components/Flag';
import { createMinedBoard } from './src/functions';
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
      board: createMinedBoard(rows, columns, minesAmount())
    };
  }

  const [state, setState] = useState(createState());

  

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Iniciando o Mine Field
        </Text>
        <Text style={styles.instructions}>
          Tamanho da grade: {params.getRowsAmount()} x {params.getColumnAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={state.board}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcome: {
    textAlign: 'center',
    fontSize: 20
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  board:{
    width: Dimensions.get('window').width,
    alignItems: 'center',
    backgroundColor: "#AAA"
  }
});


