import { StyleSheet, Text, View, Pressable } from "react-native";
import { GlobalStyles } from "../../styles";

const Colors = GlobalStyles.colors;

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary500,
    borderRadius: 4,
    padding: 8,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: Colors.primary200,
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
});
