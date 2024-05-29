import HistoryTag from "./HistoryTag";

export default function History() {
  return (<div className="flex flex-col w-full justify-center items-center">
  <h1 className="font-bold text-lg mt-2 p-2">History</h1>
    <div className="flex flex-col gap-4 items-center w-full">
      <HistoryTag title="Cash" amount={560} category="income"/>
      <HistoryTag title="Cash" amount={560} category="expense"/>

        
            </div>
  </div>
  )
}