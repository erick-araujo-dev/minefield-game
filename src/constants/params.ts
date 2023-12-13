import { Dimensions } from "react-native";

const params = {
    blockSize: 50,
    borderSize: 5,
    fontSize: 15, 
    headerRatio: 0.15,
    difficultLevel: 0.1,
    difficultEasy: 0.1,
    difficultNormal: 0.2,
    difficultHard: 0.3,
    getColumnAmount() {
        const width = Dimensions.get("window").width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount (){
        const totalHeight = Dimensions.get("window").height
        const boardHeight = totalHeight * (1 - this.headerRatio) 
        return Math.floor(boardHeight/this.blockSize)
    },
}

export default params;