import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { levelEnum } from '../constants/levelEnum';
import params from '../constants/params';
  
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
       
        width: params.blockSize * 2,
        height: params.blockSize,
        borderWidth: params.borderSize,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d',
        borderBottomColor: "#2F4F4F",
        borderRightColor: "#2F4F4F",
        borderLeftColor: "#8FCC8F",
        borderTopColor: "#8FCC8F",
    },
    bgNormal: {
        backgroundColor: '#2765F7',
        borderBottomColor: "#191970",
        borderRightColor: "#191970",
        borderLeftColor: "#6495ED",
        borderTopColor: "#6495ED",
    },
    bgHard: {
        backgroundColor: '#F26337',
        borderBottomColor: "#800000",
        borderRightColor: "#800000",
        borderLeftColor: "#FFA07A",
        borderTopColor: "#FFA07A",
    }
})

export default ButtonChangeLevel;