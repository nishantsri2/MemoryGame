import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: 20,
    },
    heading: {
        color: 'blue',
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 16,
    },
    cardItem: {
        height: Dimensions.get('window').width/4, 
        width: Dimensions.get('window').width/4, 
        margin: 12, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    infoContainer: {
      flexDirection: 'row'
    },
    infoSubContainer: {
      paddingHorizontal: '20%'
    },
    label: {
      textAlign: 'center'
    },
    timeContainer: {
      alignItems: 'center'
    },
    list: {
      alignItems: 'center'
    }
  });