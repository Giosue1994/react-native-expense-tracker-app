import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../util/date";

export default function RecentExpensesScreen() {
  const expenses = useSelector((state) => state.expenses.expenses);

  // filtrare expenses che si sono verificate solo negli ultimi 7 giorni
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();

    // trovare le spese degli ultimi 7 giorni a partire da oggi
    // ottenendo la data di 7 giorni fa tramite la funzione
    const date7daysAgo = getDateMinusDays(today, 7);

    // se la data della spesa è maggiore della data di 7 giorni fa ritorna il risultato
    return expense.date > date7daysAgo;
  });

  return (
    <ExpensesOutput
      fallbackText="No expenses registered for the last 7 days."
      expenses={recentExpenses}
      summaryText="Last 7 Days"
    />
  );
}

const styles = StyleSheet.create({});
