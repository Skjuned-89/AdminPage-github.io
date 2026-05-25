const InvoiceStatus = ({
    status,
  }) => {
  
    const statusStyle = {
      Paid: "bg-green-500/20 text-green-400",
      Pending: "bg-yellow-500/20 text-yellow-400",
      Overdue: "bg-red-500/20 text-red-400",
    };
  
    return (
  
      <div
        className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${statusStyle[status]}`}
      >
  
        {status}
  
      </div>
    );
  };
  
  export default InvoiceStatus;