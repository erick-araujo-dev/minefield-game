import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { levelEnum } from '../constants/levelEnum';
  
  interface ButtonChangeLevelProps {
    level: levelEnum;
    onLevelSelected: (level: levelEnum) => void;
  }

const ButtonChangeLevel:React.FC<ButtonChangeLevelProps> = ({level, onLevelSelected}) => {
    const getButtonStyle = () => {
        switch (level) {
          case levelEnum.Fácil:
            return [styles.button, styles.bgEasy];
          case levelEnum.Normal:
            return [styles.button, styles.bgNormal];
          case levelEnum.Difícil:
            return [styles.button, styles.bgHard];
          default:
            return styles.button;
        }
      };
      const getLabel = () => {
        const labels = Object.keys(levelEnum);
        return labels[labels.indexOf(labels.find(key => levelEnum[key] === level) || '')] || '';
      };
    return (
        <TouchableOpacity style={[getButtonStyle()]} onPress={() => onLevelSelected(level)}>
            <Text style={styles.buttonLabel}>{getLabel()}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})

export default ButtonChangeLevel;