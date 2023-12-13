import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import params from './src/constants/params';
import { cloneBoard, createMinedBoard, flagsUsed, hadExplosion, invertFlag, openField, showMines, wonGame } from './src/functions';
import { SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import { levelEnum } from './src/constants/levelEnum';
import LevelSelection from './src/screens/LevelSelection';
import MineField from './src/components/MineField';

export default function App() {
  const minesAmount = () => {
    const rows = params.getRowsAmount();
    const columns = params.getRowsAmount();
    return Math.ceil(columns * rows * params.difficultLevel);
  }

  const createInitialState = () => {
    const rows = params.getRowsAmount();
    const columns = params.getColumnAmount();

    return {
      board: createMinedBoard(rows, columns, minesAmount()),
      won: false,
      lost: false,
      showLevelSelect: false,
    };
  }

  const [board, setBoard] = useState(createInitialState().board);
  const [won, setWon] = useState(createInitialState().won);
  const [lost, setLost] = useState(createInitialState().lost);
  const [showLevelSelect, setShowLevelSelect] = useState(createInitialState().showLevelSelect);

  const handleOpenField = (row: number, column: number) => {
    const newBoard = cloneBoard(board);
    openField(newBoard, row, column);

    const hasLost = hadExplosion(newBoard);
    const hasWon = wonGame(newBoard);

    if (hasLost) {
      showMines(newBoard);
      Alert.alert('Você perdeu !!!');
    }

    if (hasWon) {
      Alert.alert('Você venceu !!!');
    }

    setBoard(newBoard);
    setWon(hasWon);
    setLost(hasLost);
  }

  const handleSelectField = (row: number, column: number) => {
    const newBoard = cloneBoard(board);
    invertFlag(newBoard, row, column);

    const hasWon = wonGame(newBoard);

    if (hasWon) {
      Alert.alert('Você venceu !!!');
    }

    setBoard(newBoard);
    setWon(hasWon);
  }

  const calculateFlagsLeft = () => {
    const newBoard = cloneBoard(board);
    return minesAmount() - flagsUsed(newBoard);
  }

  const handleLevelSelected = (level: levelEnum) => {
    params.difficultLevel = level;
    setBoard(createInitialState().board);
    setWon(false);
    setLost(false);
    setShowLevelSelect(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LevelSelection
        isVisible={showLevelSelect}
        onLevelSelected={handleLevelSelected}
        onCancel={() => setShowLevelSelect(prevState => !prevState)}
      />

      <Header
        onFlagPress={() => setShowLevelSelect(prevState => !prevState)}
        onNewGame={() => {
          setBoard(createInitialState().board);
          setWon(false);
          setLost(false);
        }}
        flagsLeft={calculateFlagsLeft()}
      />

      <View style={styles.board}>
        <MineField onOpenField={handleOpenField} onSelectField={handleSelectField} board={board} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#AAA',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
