import { createContext, useEffect, useState } from "react";
import eventService from "../services/eventService";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await eventService.getAll();
      setEvents(data);
    } catch (error) {
      console.error("Error al cargar eventos:", error);
    }
  };

  const addEvent = async (event) => {
    try {
      const newEvent = await eventService.create(event);
      setEvents((prev) => [...prev, newEvent]);
    } catch (error) {
      console.error("Error al agregar evento:", error);
    }
  };

  const updateEvent = async (updatedEvent) => {
    try {
      const event = await eventService.update(updatedEvent);

      setEvents((prev) =>
        prev.map((e) => (e.id === event.id ? event : e))
      );
    } catch (error) {
      console.error("Error al actualizar evento:", error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await eventService.remove(id);

      setEvents((prev) =>
        prev.filter((event) => event.id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar evento:", error);
    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        loadEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};