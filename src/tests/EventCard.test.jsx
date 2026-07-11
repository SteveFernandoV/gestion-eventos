/// <reference types="vitest" />

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { EventProvider } from "../context/EventContext";
import EventCard from "../components/EventCard/EventCard";

const event = {
  id: 1,
  title: "React Summit",
  date: "2026-08-20",
  location: "Cusco",
  description: "Evento de prueba",
};

describe("EventCard", () => {
  test("muestra la información del evento", () => {
    render(
      <EventProvider>
        <BrowserRouter>
          <EventCard event={event} />
        </BrowserRouter>
      </EventProvider>
    );

    expect(screen.getByText("React Summit")).toBeInTheDocument();
    expect(screen.getByText(/Cusco/i)).toBeInTheDocument();
    expect(screen.getByText(/Evento de prueba/i)).toBeInTheDocument();
  });
});