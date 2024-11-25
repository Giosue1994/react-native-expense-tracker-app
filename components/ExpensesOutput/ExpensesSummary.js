import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../styles";

const Colors = GlobalStyles.colors;

export default function ExpensesSummary({ expenses, text }) {
  // somma di tutti gli importi
  // 0 è il valore assegnato a sum che viene sommato ad ogni elemento
  const totalExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>{text}</Text>
      <Text style={styles.summaryPrice}>€{totalExpenses.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    padding: 8,
    marginBottom: 10,
    backgroundColor: Colors.primary50,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryText: {
    color: Colors.primary500,
  },
  summaryPrice: {
    fontWeight: "bold",
    color: Colors.primary500,
    fontSize: 18,
  },
});
