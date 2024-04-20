import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../styles";
const Colors = GlobalStyles.colors;

export default function ExpenseItem({ description, date, amount, id }) {
  const navigation = useNavigation();

  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  function editExpenseHandler() {
    navigation.navigate("ManageExpense", { expenseId: id });
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={editExpenseHandler}
        android_ripple={{ color: Colors.primary400 }}
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.button] : styles.button
        }
      >
        <View>
          <Text style={[styles.itemText, styles.itemDescription]}>
            {description}
          </Text>
          <Text style={styles.itemText}>{formattedDate}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.itemAmount}>{amount.toFixed(2)}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    overflow: "hidden",
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: Colors.primary400,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  pressed: {
    opacity: 0.5,
  },
  itemText: {
    color: Colors.primary50,
  },
  itemDescription: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  amountContainer: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
  },
  itemAmount: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
