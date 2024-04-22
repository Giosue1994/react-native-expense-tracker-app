import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../styles";

import { expensesActions } from "../store/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";

const Colors = GlobalStyles.colors;

export default function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;

  // viene trasformato in un booleano
  const isEditing = !!editedExpenseId;

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);

  const selectedExpense = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    await deleteExpense(editedExpenseId);
    dispatch(expensesActions.deleteExpense(editedExpenseId));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    if (isEditing) {
      dispatch(
        expensesActions.updateExpense({
          id: editedExpenseId,
          data: expenseData,
        })
      );
      await updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      dispatch(expensesActions.addExpense({ ...expenseData, id: id }));
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValue={selectedExpense}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary200,
    alignItems: "center",
  },
});
