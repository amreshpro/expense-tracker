import { create } from "zustand";

type State = { balance: number; income: number; expense: number };
type Actions = {
  decreaseBalance: (amount: number) => void;
  increaseBalance: (amount: number) => void;
  updateIncome: (amount: number) => void;
  updateExpense: (amount: number) => void;
};
const useExpenseStore = create<State & Actions>((set) => ({
  balance: 0,
  income: 0,
  expense: 0,
  decreaseBalance: (amount: number) => {
    set((state) => ({
      balance:
        state.balance - amount >= 0 ? state.balance - amount : state.balance,
    }));
  },
  increaseBalance: (amount: number) => {
    set((state) => ({ balance: state.balance + amount }));
  },
  updateIncome: (amount: number) => {
    set((state) => ({ income: state.income + amount }));
  },
  updateExpense: (amount: number) => {
    set((state) => ({
      expense: state.balance !== 0 && state.balance>=amount ? state.expense + amount : state.expense,
    }));
  },
}));

export default useExpenseStore;
