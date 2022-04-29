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
        <Text style={styles.info}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
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



