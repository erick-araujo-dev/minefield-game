import React from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonChangeLevel from '../components/ButtonChangeLevel';
import { levelEnum } from '../constants/levelEnum';

interface LevelSelectionProps{
    onCancel: () => void,
    isVisible: boolean,
    onLevelSelected: (level: levelEnum) => void
}

const LevelSelection:React.FC<LevelSelectionProps> = ({onCancel, isVisible, onLevelSelected}) => {
    return (
        <Modal onRequestClose={onCancel} 
        visible={isVisible}
        animationType='slide'
        transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Selecione o nível do jogo
                    </Text>
                    <ButtonChangeLevel onLevelSelected={onLevelSelected} level={levelEnum.Fácil}/>
                    <ButtonChangeLevel onLevelSelected={onLevelSelected} level={levelEnum.Normal}/>
                    <ButtonChangeLevel onLevelSelected={onLevelSelected} level={levelEnum.Difícil}/>
                </View>

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
})
export default LevelSelection;