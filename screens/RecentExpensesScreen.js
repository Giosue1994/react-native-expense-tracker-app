import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";
import { expensesActions } from "../store/expenses";
import { getDateMinusDays } from "../util/date";
import { useEffect, useState } from "react";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

export default function RecentExpensesScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const expenses = useSelector((state) => state.expenses.expenses);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      dispatch(expensesActions.setExpenses(expenses));
    }

    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
