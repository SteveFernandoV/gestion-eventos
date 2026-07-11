import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";

import { EventProvider } from "./context/EventContext";
import { ParticipantProvider } from "./context/ParticipantContext";
import { EnrollmentProvider } from "./context/EnrollmentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventProvider>
      <ParticipantProvider>
        <EnrollmentProvider>
          <App />
        </EnrollmentProvider>
      </ParticipantProvider>
    </EventProvider>
  </React.StrictMode>
);