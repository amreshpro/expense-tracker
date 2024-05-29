import useExpenseStore from "@/store/expenseStore";
import useThemeStore from "@/store/themeStore";

export default function CurrentBalance() {
  const { isDarkMode } = useThemeStore();
  const currentBalance = useExpenseStore((state) => state.balance);

  return (
    <div
      className={`${
        isDarkMode ? "bg-blue-900" : "bg-blue-100 "
      } rounded-r-lg rounded-l-lg p-2   `}
    >
      <h1 className="text-3xl sm:text-2xl">Your Balance</h1>
      <h3 className="text-3xl sm:text-2xl">₹{currentBalance}</h3>
    </div>
  );
}
