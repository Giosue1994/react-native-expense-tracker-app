import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;

  // viene trasformato in un booleano
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>{editedExpenseId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
