import useHistoryStore from "@/store/historyStore";
import HistoryTag from "./HistoryTag";

export default function History() {
  const { history } = useHistoryStore((state) => state);
  console.log(history)
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="font-bold text-lg mt-2 p-2">History</h1>
      <div className="flex flex-col gap-4 items-center w-full">
        {history.map((item) => {
          return (
            <HistoryTag
              key={item.id}
              {...item}
              category={item.amount > 0 ? "income" : "expense"}
            />
          );
        })}
      </div>
    </div>
  );
}
