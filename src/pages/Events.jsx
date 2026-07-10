import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EventCard from "../components/EventCard/EventCard";
import SearchBar from "../components/SearchBar/SearchBar";
import useEvents from "../hooks/useEvents";

function Events() {
  const { events } = useEvents();

  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1 style={{ textAlign: "center" }}>
          Lista de Eventos
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {filteredEvents.length === 0 ? (
            <p>No se encontraron eventos.</p>
          ) : (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Events;