import { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Conferencia de Tecnología",
      date: "15/08/2026",
      location: "Cusco",
      description: "Evento sobre innovación tecnológica.",
    },
    {
      id: 2,
      title: "Hackathon Universitario",
      date: "20/08/2026",
      location: "Universidad Continental",
      description: "Competencia de programación.",
    },
    {
      id: 3,
      title: "Curso de React",
      date: "28/08/2026",
      location: "Virtual",
      description: "Curso intensivo de React.",
    },
  ]);

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};