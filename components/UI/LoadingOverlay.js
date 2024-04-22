import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { GlobalStyles } from "../../styles";

const Colors = GlobalStyles.colors;

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.primary700,
  },
});
