import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";
import Participants from "../pages/Participants";
import NewEvent from "../pages/NewEvent";
import EditEvent from "../pages/EditEvent";
import RegisterParticipant from "../pages/RegisterParticipant";
import EnrollParticipant from "../pages/EnrollParticipant";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Eventos */}
        <Route path="/events" element={<Events />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/edit-event/:id" element={<EditEvent />} />

        {/* Participantes */}
        <Route path="/participants" element={<Participants />} />
        <Route
          path="/register-participant"
          element={<RegisterParticipant />}
        />
        <Route
          path="/enroll-participant"
          element={<EnrollParticipant />}
        />

        {/* Página no encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;