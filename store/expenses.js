import { createSlice } from "@reduxjs/toolkit";

const EXPENSES = [
  {
    id: 1,
    description: "Description",
    amount: 20.3,
    date: new Date("2024-04-17"),
  },
  {
    id: 2,
    description: "Lorem Ipsum",
    amount: 12.68,
    date: new Date("2024-04-10"),
  },
  {
    id: 3,
    description: "Textures",
    amount: 34.54,
    date: new Date("2024-04-01"),
  },
  {
    id: 4,
    description: "Spesa 1",
    amount: 14.44,
    date: new Date("2024-03-11"),
  },
  {
    id: 5,
    description: "Spesa 2",
    amount: 74.74,
    date: new Date("2024-04-21"),
  },
  {
    id: 6,
    description: "Spesa 3",
    amount: 34.12,
    date: new Date("2024-04-20"),
  },
  {
    id: 7,
    description: "Spesa 4",
    amount: 45.98,
    date: new Date("2024-04-16"),
  },
];

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: EXPENSES,
  },
  reducers: {
    addExpense(state, action) {
      const id = new Date().toString() + Math.random().toString();
      state.expenses = [{ ...action.payload, id }, ...state.expenses];
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
