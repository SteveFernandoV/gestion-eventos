import "./EventCard.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>

      <p>
        <strong>Fecha:</strong> {event.date}
      </p>

      <p>
        <strong>Lugar:</strong> {event.location}
      </p>

      <p>{event.description}</p>

      <div className="buttons">
        <button className="edit">Editar</button>
        <button className="delete">Eliminar</button>
      </div>
    </div>
  );
}

export default EventCard;