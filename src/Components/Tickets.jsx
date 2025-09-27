import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./Banner";
import TicketCard from "./TicketCard";
import TaskStatus from "./TaskStatus";
import ResolvedTasks from "./ResolvedTasks";

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

  const inProgressCount = taskStatus.filter((t) => t.status === "in-progress")
    .length;
  const resolvedCount = resolved.length;

  const handleAddToTaskStatus = (ticket) => {
    if (taskStatus.find((t) => t.id === ticket.id)) {
      toast.info("Ticket already added to Task Status!");
      return;
    }
    setTaskStatus((prev) => [...prev, { ...ticket, status: "in-progress" }]);
    toast.success(`Added "${ticket.title}" to Task Status!`);
  };

  const handleCompleteTask = (ticket) => {
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticket.id));
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [...prev, { ...ticket, status: "resolved" }]);
    toast.success(`Ticket "${ticket.title}" marked as resolved!`);
  };

  return (
    <div className="mx-10 mb-20">
      {/* Banner */}
      <div className="grid grid-cols-2 gap-4 mb-[30px] my-[50px]">
        <Banner
          title="In-Progress"
          count={inProgressCount}
          fromColor="from-[#632EE3]"
          toColor="to-[#9F62F2]"
        />
        <Banner
          title="Resolved"
          count={resolvedCount}
          fromColor="from-[#54CF68]"
          toColor="to-[#00827A]"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left panel */}
        <div className="md:w-3/5">
          <h2 className="mb-4 text-lg font-semibold">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onClick={handleAddToTaskStatus}
              />
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="md:w-2/5 space-y-6">
          <TaskStatus taskStatus={taskStatus} onComplete={handleCompleteTask} />
          <ResolvedTasks resolved={resolved} />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Tickets;