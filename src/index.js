import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Camera } from "expo-camera";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "@expo/vector-icons/Feather";
import ConfirmPhoto from "./submit-photo";
import * as Location from "expo-location";

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = React.useState(
    Camera.Constants.FlashMode.off
  );
  const cameraRef = React.useRef(null);

  const [photoUri, setPhotoUri] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [showPhoto, setShowPhoto] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  console.log(location);
  const isFlashOn = Camera.Constants.FlashMode.on === flashMode;

  const onTakePhoto = async () => {
    setIsLoading(true);
    let photo = await cameraRef.current.takePictureAsync();
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setPhotoUri(photo);
    setShowPhoto(true);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {!showPhoto ? (
        <>
          <Camera
            ref={cameraRef}
            style={styles.camera}
            type={type}
            flashMode={flashMode}
          >
            <SafeAreaView
              style={{
                flex: 1,
                justifyContent: "space-between",
                backgroundColor: isLoading ? "rgba(0,0,0,.5)" : "transparent",
              }}
            >
              <View />
              <View>
                {isLoading ? (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={{ color: "#fff", marginTop: RFValue(10) }}>
                      Processing...
                    </Text>
                  </View>
                ) : null}
              </View>
              <View style={styles.buttonContainer}>
                {isLoading ? null : (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        setFlashMode(
                          flashMode === Camera.Constants.FlashMode.on
                            ? Camera.Constants.FlashMode.off
                            : Camera.Constants.FlashMode.on
                        );
                      }}
                      style={{ marginRight: RFValue(30) }}
                    >
                      <Feather
                        name={isFlashOn ? "zap-off" : "zap"}
                        color={"#fff"}
                        size={RFValue(25)}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={onTakePhoto}
                      style={styles.button}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setType(
                          type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );
                      }}
                      style={{ marginLeft: RFValue(30) }}
                    >
                      <Feather
                        name={"repeat"}
                        color={"#fff"}
                        size={RFValue(20)}
                      />
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </SafeAreaView>
          </Camera>
        </>
      ) : null}
      <ConfirmPhoto
        show={showPhoto}
        setShow={() => {
          setPhotoUri(null);
          setLocation(null);
          setShowPhoto(false);
        }}
        photo={photoUri}
        location={location}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: RFValue(20),
  },
  button: {
    borderWidth: 9,
    borderRadius: 50,
    borderColor: "#ffff",
    height: RFValue(80),
    width: RFValue(80),
  },
  text: {
    color: "#fff",
  },
});
