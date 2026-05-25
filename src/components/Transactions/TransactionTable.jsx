import TransactionRow from "./TransactionRow";

const TransactionTable = ({
  transactions,
}) => {

  return (

    <div className="bg-[#111827] border border-cyan-500/20 rounded-3xl overflow-hidden">

      {/* Head */}
      <div className="grid grid-cols-5 px-6 py-5 border-b border-cyan-500/10 text-gray-400 font-medium">

        <p>ID</p>
        <p>User</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Date</p>

      </div>

      {/* Rows */}
      <div className="flex flex-col">

        {transactions.map((item, index) => (

          <TransactionRow
            key={index}
            transaction={item}
          />

        ))}

      </div>

    </div>
  );
};

export default TransactionTable;