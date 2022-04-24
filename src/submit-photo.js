import * as React from "react";
import {
  ImageBackground,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

const ConfirmPhoto = ({ show, setShow, photo }) => {
  return (
    <>
      <Modal visible={show} animationType="fade" style={{ flex: 1 }}>
        <ImageBackground source={{ uri: photo?.uri }} style={styles.container}>
          <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.2)" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                paddingHorizontal: RFValue(18),
                marginTop: RFValue(10),
              }}
            >
              <View>
                <TouchableOpacity onPress={setShow}>
                  <Feather name="x" color="#fff" size={RFValue(30)} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.button}>
                    <Text
                      style={{
                        fontSize: RFValue(15),
                        fontWeight: "700",
                        marginRight: RFValue(10),
                        color: "#fff",
                      }}
                    >
                      Confirm
                    </Text>
                    <Ionicons
                      name="ios-checkmark-circle"
                      color="#fff"
                      size={RFValue(15)}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(18),
    justifyContent: "center",
    borderRadius: RFValue(20),
  },
  button2: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(18),
    justifyContent: "center",
    borderRadius: RFValue(20),
  },
});
export default ConfirmPhoto;
