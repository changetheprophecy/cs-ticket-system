import { useEffect, useState, Suspense } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Task from "./Components/Task";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";

// fetch tickets with correct base URL for GitHub Pages
const fetchTicket = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

function App() {
  const [tickets, setTickets] = useState([]); // Customer Tickets
  const [selectTicket, setSelectTicket] = useState([]); // In Progress
  const [resolveTask, setResolveTask] = useState([]); // Completed

  // Load tickets
  useEffect(() => {
    fetchTicket().then((data) => setTickets(data));
  }, []);

  // Add ticket to Task Status
  const handleAddTask = (ticket) => {
    if (!selectTicket.some((t) => t.id === ticket.id)) {
      setSelectTicket([...selectTicket, ticket]);
    }
  };

  // remove from Task Status & Customer Tickets, add to Resolved
  const handleRemoveTask = (ticket) => {
    setSelectTicket(selectTicket.filter((t) => t.id !== ticket.id)); // Remove from Task Status
    setTickets(tickets.filter((t) => t.id !== ticket.id)); // Remove from Customer Tickets if still there
    setResolveTask([...resolveTask, ticket]); // Add to Resolved
  };

  return (
    <>
      <Navbar />
      <Banner inProgressCount={selectTicket.length} resolvedCount={resolveTask.length} />

      <div className="flex flex-col md:flex-row justify-between gap-8 max-w-[1280px] mx-auto">
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Main tickets={tickets} handleAddTask={handleAddTask} />
        </Suspense>

        <Task
          selectTicket={selectTicket}
          handleRemoveTask={handleRemoveTask}
          resolveTask={resolveTask}
        />
      </div>

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
