import EventCard from "../components/EventCard/EventCard";
import useEvents from "../hooks/useEvents";

function Events() {
  const { events } = useEvents();

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Eventos</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;