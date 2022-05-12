import * as React from "react";
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from "react-native";
import {Modal} from "./Modal";

export default function InstructionList() {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  

  return (
      <>
      <TouchableOpacity style={styles.button} onPress={handleModal}>
      <Text style={styles.textbutton}>Take Note</Text>
    </TouchableOpacity>
    <Modal isVisible={isModalVisible}>
    <Modal.Container>
        <Modal.Header title="Instructions" />
        <Modal.Body>
        <Text style={styles.info}>1. Wait for approximately 3 minutes before</Text>
        <Text style={styles.info}>     capturing the color change.</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.info}>2. Capture the color change area only.</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.info}>3. Make a study hand when capturing.</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.info}>4. Make sure internet connectivity is on </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        </Modal.Body>
        <Modal.Footer>
        <TouchableOpacity style={styles.button} onPress={handleModal}>
         <Text style={styles.textbutton}>Noted</Text>
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



