"use client";
import AddTransaction from "./ui/AddTransaction";
import CurrentBalance from "./ui/CurrentBalance";
import History from "./ui/History";
import IncomeExpense from "./ui/IncomeExpense";

export default function ExpenseApp() {
  return (
    <div className=" my-4 h-full flex flex-col  justify-center items-center gap-8 ">
      <CurrentBalance />
      <div className="flex flex-wrap justify-evenly gap-4">
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </div>
  );
}
