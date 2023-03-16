import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import TicketBooking from "./components/TicketBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/shows/:id" element={<ShowSummary />} />
        <Route path="/book/:id" element={<TicketBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
