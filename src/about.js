import * as React from "react";
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from "react-native";
import {Modal} from "./Modal";

export default function About() {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  

  return (
      <>
      <TouchableOpacity style={styles.button} onPress={handleModal}>
      <Text style={styles.textbutton}>About</Text>
    </TouchableOpacity>
    <Modal isVisible={isModalVisible}>
    <Modal.Container>
        <Modal.Header title="About" />
        <Modal.Body>
        <Text style={styles.info}></Text>
        <Text style={styles.info}></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.info}>The ANYIN-YUIE App is a soil nutrient test app.</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.info}></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.info}></Text>
        <Text style={styles.info}></Text>
        <Text></Text>
        <Text></Text>
        </Modal.Body>
        <Modal.Footer>
        <TouchableOpacity style={styles.button} onPress={handleModal}>
         <Text style={styles.textbutton}>Close</Text>
        </TouchableOpacity>
        </Modal.Footer>
    </Modal.Container>
    </Modal>
      
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 25,
    width: "40%",
    alignItems: "center",
    marginBottom: 20,
  },
  textbutton: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  info:{
    
      color:"black",
      fontWeight: "bold", 
      fontSize: 15,
  }

});



