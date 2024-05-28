export default function HistoryTag({
  title,
  amount,
  category = "expense",
}: {
  title: string;
  amount: number;
  category: string;
}) {
  return (
    <div
      className={` ${
        category === "expense" ? "bg-red-500" : "bg-green-500"
      } sm:w-full w-96 flex gap-1 justify-between p-2 rounded-r-lg rounded-l-lg `}
    >
      <p>{title}</p>
      <p>₹{amount}</p>
    </div>
  );
}
