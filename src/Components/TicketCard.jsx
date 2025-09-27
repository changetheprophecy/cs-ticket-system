import { FaRegCalendarAlt } from "react-icons/fa";

const TicketCard = ({ ticket, onClick }) => {
  const statusColors = {
    open: { bg: "bg-green-100", text: "text-green-800", dot: "bg-green-800" },
    "in-progress": { bg: "bg-yellow-100", text: "text-yellow-800", dot: "bg-yellow-800" },
    resolved: { bg: "bg-gray-300", text: "text-gray-700", dot: "bg-gray-700" },
  };

  const { bg, text, dot } = statusColors[ticket.status] || statusColors.resolved;

  return (
    <div
      className="border border-gray-300 rounded-md p-4 shadow cursor-pointer hover:shadow-lg transition relative"
      onClick={() => onClick(ticket)}
    >
      <div
        className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full flex items-center justify-center ${bg} ${text}`}
        style={{ minWidth: "60px" }}
      >
        <span className={`inline-block w-2.5 h-2.5 rounded-full mr-2 ${dot}`}></span>
        {ticket.status === "open"
          ? "Open"
          : ticket.status === "in-progress"
          ? "In Progress"
          : "Resolved"}
      </div>

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">{ticket.title}</h3>
      </div>

      <p className="text-xs mb-2 line-clamp-3">{ticket.description}</p>

      <div className="flex justify-between items-center text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold">#{ticket.id}</span>
          <span
            className={`font-semibold ${
              ticket.priority === "HIGH PRIORITY"
                ? "text-red-600"
                : ticket.priority === "MEDIUM PRIORITY"
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {ticket.priority.charAt(0) + ticket.priority.slice(1).toLowerCase()}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span>{ticket.customer}</span>
          <div className="flex items-center gap-1 text-gray-500">
            <FaRegCalendarAlt className="text-xs" />
            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
