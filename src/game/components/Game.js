import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {setCardList, setFirstCardIndex, insertMatchedItem,
     incrementLevel, incrementTimer, setSecondCardIndex} from '../Actions';
import { styles } from '../styles/gameStyles';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: null,
        };
    }
    componentDidMount(){
        const {cardList} = this.props.gameState;
        if(cardList.length === 0){
            this.createCardList()
        }
        this.startTimer();
    }
    startTimer = () => {
        const intervalId = setInterval(() => {
            this.props.incrementTimer()
        }, 1000);
        this.setState({intervalId});
    }
    createCardList = () => { // create card list and set in redux
        const {level} = this.props.gameState;
        const cardList = Array(2).fill([...Array(level+1).keys()]).flat()

        for (let i = cardList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
        }
        this.props.setCardList(cardList);
    }
    
    onCardSelection = (item, index) => {
        const {firstCardIndex, cardList, matchedList} = this.props.gameState;
        if(firstCardIndex === null){ // no card is selected
            this.props.setFirstCardIndex(index)
        }else{ // only first card is selected
            if(index === firstCardIndex){ // reselection of first card
                this.props.setFirstCardIndex(null);
            }
            else if(item === cardList[firstCardIndex]){ // when number matches
                this.props.insertMatchedItem(item)
            } else { // when number is different
                this.props.setSecondCardIndex(index);
                setTimeout(() => {
                    this.props.setFirstCardIndex(null);
                    this.props.setSecondCardIndex(null);
                }, 200)
            }
        }
    }
    componentDidUpdate(prevProp, prevState){
        const {matchedList, cardList, level} = this.props.gameState;
        if(matchedList.length === cardList.length/2){ // all cards are matched
            this.props.incrementLevel();
            const intervalId = this.state.intervalId;
            clearInterval(intervalId);
        }
        if(prevProp.gameState.level !== level){ //level is increment, loading new level
            this.createCardList();
            this.startTimer();
        }
    }
    render() {
        const {level, cardList, matchedList, firstCardIndex,
             secondCardIndex, score, timerValue} = this.props.gameState;
        const timeTaken = new Date(timerValue * 1000).toISOString().substr(11, 8);
        return (
        <View style={styles.container}>
            <Text style={styles.heading}>Memory Game</Text>
            <View style={styles.infoContainer}>
                <View style={styles.infoSubContainer}>
                    <Text>Level</Text>
                    <Text style={styles.label}>{level}</Text>
                </View>
                <View style={styles.infoSubContainer}>
                    <Text>Score</Text>
                    <Text style={styles.label}>{score}</Text>
                </View>
            </View>
            <View style={styles.timeContainer}>
                <Text>Time taken</Text>
                <Text style={styles.label}>{timeTaken}</Text>
            </View>
            <FlatList
                data={cardList}
                numColumns={cardList.length > 4 ? 3: 2}
                contentContainerStyle={styles.list}
                key={cardList.length}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                const show = matchedList.includes(item) || firstCardIndex === index  || secondCardIndex === index
                return(
                    <TouchableOpacity
                    key={index}
                    onPress={() => this.onCardSelection(item, index)}
                    style={{...styles.cardItem, backgroundColor: show ? 'white' : 'green'}}>
                        {
                            show &&
                            <Text>{item}</Text> 
                        }
                    </TouchableOpacity>
            )}}
        />
        </View>
        );
    }
}

const mapStateToProps = state => ({
    gameState: state.gameReducer
});

const mapDispatchToProps = {
    setCardList,
    setFirstCardIndex,
    insertMatchedItem,
    incrementLevel,
    incrementTimer,
    setSecondCardIndex,
};

export default connect(
mapStateToProps,
mapDispatchToProps,
)(Game);