import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";
import List from './list';

const App = ({ showModal, setshowModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setshowModal(!showModal);
      }}
    >
      <View style={styles.centeredView}>
        <SafeAreaView>
          <View style={styles.modalView}>
          <List/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setshowModal(!showModal)}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 14,
    elevation: 4,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "blue",
    padding: 20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
