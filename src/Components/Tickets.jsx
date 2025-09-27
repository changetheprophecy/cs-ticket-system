import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import vector1 from "../assets/vector1.png";
import image from "../assets/image.png";

const initialTickets = [
  {
    id: 1001,
    title: "Login Issues - Can't Access Account",
    description:
      "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
    customer: "John Smith",
    priority: "HIGH PRIORITY",
    status: "open",
    createdAt: "1/15/2024",
  },
  {
    id: 1002,
    title: "Payment Failed - Card Declined",
    description:
      "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
    customer: "Sarah Johnson",
    priority: "HIGH PRIORITY",
    status: "open",
    createdAt: "1/16/2024",
  },
  {
    id: 1003,
    title: "Unable to Download Invoice",
    description:
      "Customer cannot download their January invoice from the billing section. The download button is...",
    customer: "Michael Brown",
    priority: "MEDIUM PRIORITY",
    status: "in-progress",
    createdAt: "1/17/2024",
  },
  {
    id: 1004,
    title: "Incorrect Billing Address",
    description:
      "Customer's billing address shows a different city. They updated it but it still displays the old one.",
    customer: "Emily Davis",
    priority: "LOW PRIORITY",
    status: "open",
    createdAt: "1/18/2024",
  },
  {
    id: 1005,
    title: "App Crash on Launch",
    description:
      "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
    customer: "David Wilson",
    priority: "HIGH PRIORITY",
    status: "open",
    createdAt: "1/19/2024",
  },
  {
    id: 1006,
    title: "Refund Not Processed",
    description:
      "Customer requested a refund two weeks ago but has not received the amount yet.",
    customer: "Sophia Taylor",
    priority: "MEDIUM PRIORITY",
    status: "in-progress",
    createdAt: "1/20/2024",
  },
  {
    id: 1007,
    title: "Two-Factor Authentication Issue",
    description:
      "Customer is not receiving 2FA codes on their registered phone number.",
    customer: "James Anderson",
    priority: "HIGH PRIORITY",
    status: "open",
    createdAt: "1/21/2024",
  },
  {
    id: 1008,
    title: "Unable to Update Profile Picture",
    description:
      "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
    customer: "Olivia Martinez",
    priority: "LOW PRIORITY",
    status: "open",
    createdAt: "1/22/2024",
  },
  {
    id: 1009,
    title: "Subscription Auto-Renewal",
    description:
      "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
    customer: "Liam Thomas",
    priority: "MEDIUM PRIORITY",
    status: "in-progress",
    createdAt: "1/23/2024",
  },
  {
    id: 1010,
    title: "Missing Order Confirmation Email",
    description:
      "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    customer: "Isabella Garcia",
    priority: "MEDIUM PRIORITY",
    status: "open",
    createdAt: "1/24/2024",
  },
];

const priorityColors = {
  "HIGH PRIORITY": "text-red-600",
  "MEDIUM PRIORITY": "text-yellow-600",
  "LOW PRIORITY": "text-green-600",
};

const Tickets = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Calculate in-progress count
  const inProgressCount = taskStatus.filter((t) => t.status === "in-progress").length;

  // Resolved count
  const resolvedCount = resolved.length;

  // Add ticket to Task Status on card click
  const handleAddToTaskStatus = (ticket) => {
  if (taskStatus.find((t) => t.id === ticket.id)) {
    toast.info("Ticket already added to Task Status!");
    return;
  }
  setTaskStatus((prev) => [...prev, { ...ticket, status: "in-progress" }]);
  toast.success(`Added "${ticket.title}" to Task Status!`);
};


  // Complete task
  const handleCompleteTask = (ticket) => {
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticket.id));
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [...prev, { ...ticket, status: "resolved" }]);
    toast.success(`Ticket "${ticket.title}" marked as resolved!`);
  };

  return (
    <div className="mx-10 mb-20">
      {/* Banner */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* In-Progress Banner */}
        <div className="relative rounded-md p-7 text-white h-[150px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center overflow-hidden">
          <img
            src={vector1}
            alt="vector left"
            className="absolute left-0 top-0 h-full"
          />
          <img
            src={image}
            alt="image right"
            className="absolute right-0 top-0 h-full"
          />
          <p>In-Progress</p>
          <h1 className="text-3xl font-bold">{inProgressCount}</h1>
        </div>

        {/* Resolved Banner */}
        <div className="relative rounded-md p-7 text-white h-[150px] bg-gradient-to-r from-[#54CF68] to-[#00827A] flex flex-col items-center justify-center overflow-hidden">
          <img
            src={vector1}
            alt="vector left"
            className="absolute left-0 top-0 h-full"
          />
          <img
            src={image}
            alt="image right"
            className="absolute right-0 top-0 h-full"
          />
          <p>Resolved</p>
          <h1 className="text-3xl font-bold">{resolvedCount}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          <h2 className="md:col-span-2 mb-3 text-lg font-semibold">Customer Tickets</h2>

          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="border border-gray-300 rounded-md p-4 shadow cursor-pointer hover:shadow-lg transition relative"
              onClick={() => handleAddToTaskStatus(ticket)}
            >
              <div
                className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full
                  ${
                    ticket.status === "open"
                      ? "bg-green-100 text-green-800"
                      : ticket.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-300 text-gray-700"
                  }
                `}
              >
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
          ))}
        </div>

        <div className="md:w-2/5 border border-gray-300 rounded-md p-4 h-fit">
          <h2 className="font-semibold mb-4 text-lg">Task Status</h2>
          {taskStatus.length === 0 ? (
            <p className="text-gray-500">Select a ticket to add to Task Status</p>
          ) : (
            <>
              {taskStatus.map((task) => (
                <div
                  key={task.id}
                  className="border border-gray-200 rounded p-3 mb-3 flex justify-between items-center"
                >
                  <p className="text-sm font-medium">{task.title}</p>
                  <button
                    onClick={() => handleCompleteTask(task)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </>
          )}

          {/* Resolved Section */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-md">Resolved Task</h3>
            {resolved.length === 0 ? (
              <p className="text-gray-500">No resolved tasks yet.</p>
            ) : (
              resolved.map((task) => (
                <div
                  key={task.id}
                  className="border border-gray-200 rounded p-3 mb-3 bg-green-50 text-green-700"
                >
                  <p className="text-sm font-medium line-through">{task.title}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Tickets;
