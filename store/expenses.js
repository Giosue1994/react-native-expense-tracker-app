import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    setExpenses(state, action) {
      state.expenses = [...action.payload.reverse()];
    },
    addExpense(state, action) {
      state.expenses = [{ ...action.payload }, ...state.expenses];
    },
    deleteExpense(state, action) {
      state.expenses = state.expenses.filter((expense) => {
        return expense.id !== action.payload;
      });
    },
    updateExpense(state, action) {
      state.expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.data,
          };
        } else {
          return expense;
        }
      });
    },
  },
});

export const expensesActions = expensesSlice.actions;
export default expensesSlice.reducer;
