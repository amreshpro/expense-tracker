import useThemeStore from "@/store/themeStore"

export default function IncomeExpense() {
  const {isDarkMode} = useThemeStore()
  return (
    <div className={` ${isDarkMode ? 'bg-blue-950':'bg-red-100'} text-2xl h-fit sm:w-full w-96 flex gap-2 justify-between p-2 px-4 rounded-r-lg rounded-l-lg `}>
      <div className="income">
        <h1>Income</h1>
        <h1>₹500</h1>
      </div>
      <div className="expense">
        <h1>Expense</h1>
        <h1>₹200</h1>
      </div>
    </div>
  )
}