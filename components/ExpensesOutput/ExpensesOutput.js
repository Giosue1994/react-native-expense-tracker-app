import { StyleSheet, Text, View, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../styles";
const Colors = GlobalStyles.colors;

export default function ExpensesOutput({ expenses, summaryText }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} text={summaryText} />
      <ExpensesList expenses={expenses} />
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
});
