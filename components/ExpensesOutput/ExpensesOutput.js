import { StyleSheet, Text, View, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../styles";
const Colors = GlobalStyles.colors;

export default function ExpensesOutput({
  expenses,
  summaryText,
  fallbackText,
}) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} text={summaryText} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: Colors.primary700,
  },
  infoText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    marginTop: 32,
  },
});
