import React, { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Tickets from "./Components/Tickets";

const App = () => {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  return (
    <div>
      <Navbar />
      <Tickets />
      <Footer />
    </div>
  );
};

export default App;
