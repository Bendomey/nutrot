import * as React from "react";
import {
  ImageBackground,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ResultModal } from "./results";

const ConfirmPhoto = ({ show, setShow, photo }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpened, setIsOpened] = React.useState(false);

  const requestSubmission = React.useCallback(() => {
    Alert.alert(
      "Uploading...",
      "Are you sure you want to upload this?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes!",
          onPress: () => setIsLoading(true),
        },
      ],
      { cancelable: false }
    );
  }, []);

  React.useEffect(() => {
    let timeout;
    if (isLoading) {
      timeout = setTimeout(() => {
        setIsOpened(true);
        setIsLoading(false);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [isLoading]);
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
                <TouchableOpacity
                  onPress={requestSubmission}
                  activeOpacity={0.7}
                >
                  <View style={styles.button}>
                    {isLoading ? (
                      <>
                        <Text
                          style={{
                            fontSize: RFValue(15),
                            fontWeight: "700",
                            marginRight: RFValue(10),
                            color: "#fff",
                          }}
                        >
                          submitting...
                        </Text>
                        <ActivityIndicator />
                      </>
                    ) : (
                      <>
                        <Text
                          style={{
                            fontSize: RFValue(15),
                            fontWeight: "700",
                            marginRight: RFValue(10),
                            color: "#fff",
                          }}
                        >
                          Generate pH
                        </Text>
                        <Ionicons
                          name="ios-checkmark-circle"
                          color="#fff"
                          size={RFValue(15)}
                        />
                      </>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
          <ResultModal
            show={isOpened}
            onClose={() => {
              setIsOpened(false);
              setShow();
            }}
          />
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
    backgroundColor: "green",
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
