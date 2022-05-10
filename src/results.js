import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Modal from "react-native-modal";

export function ResultModal({ show, onClose, phValue }) {
  return (
    <Modal
      testID={"modal"}
      isVisible={show}
      backdropColor="#4a4a4a"
      backdropOpacity={0.8}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
    >
      <View style={styles.content}>
        <Text style={styles.contentTitle}>
          The pH concentration of this image is {phValue}
        </Text>

        <Button testID={"close-button"} onPress={onClose} title="Okay" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
    textAlign: "center",
  },
});
