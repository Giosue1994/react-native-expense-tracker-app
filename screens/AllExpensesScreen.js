import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

export default function AllExpensesScreen() {
  const expenses = useSelector((state) => state.expenses.expenses);

  return <ExpensesOutput expenses={expenses} summaryText="Total" />;
}

const styles = StyleSheet.create({});
