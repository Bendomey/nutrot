import React from 'react'
import {FlatList, StyleSheet, Text, View, 
TouchableOpacity} from 'react-native'
import { TouchableNativeFeedback } from 'react-native-web'

const styles = StyleSheet.create({
    item:{
        padding: 10, 
        fontSize: 20, 
        height: 80,
        color: "blue",
        alignItems: "center", 
        justifyContent: "center"

    }, 
    container: {
        flex: 1, 
        paddingTop: 22
    }
})




function list() {
  return (
   <FlatList 
   data={[
       {key: "INSTRUCTIONS"},
       {key: "ABOUT"}
   ]}
   renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
   />
  )
}


export default list;