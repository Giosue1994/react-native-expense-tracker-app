import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const EXPENSES = [
  {
    id: 1,
    description: "Bello testo",
    amount: 20.3,
    date: new Date("2024-04-22"),
  },
  {
    id: 2,
    description: "Cacca grossa",
    amount: 12.68,
    date: new Date("2024-12-13"),
  },
  {
    id: 3,
    description: "Ikikikikik",
    amount: 34.54,
    date: new Date("2024-07-02"),
  },
  { id: 4, description: "logog", amount: 14.44, date: new Date("2024-03-11") },
  {
    id: 5,
    description: "testo a caso",
    amount: 74.74,
    date: new Date("2024-07-30"),
  },
];

export default function RecentExpensesScreen() {
  return <ExpensesOutput expenses={EXPENSES} summaryText="Last 7 Days" />;
}

const styles = StyleSheet.create({});
