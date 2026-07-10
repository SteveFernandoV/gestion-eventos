import "./EventCard.css";
import useEvents from "../../hooks/useEvents";

function EventCard({ event }) {
  const { deleteEvent } = useEvents();

  const handleDelete = () => {
    const confirmar = window.confirm(
      `¿Deseas eliminar el evento "${event.title}"?`
    );

    if (confirmar) {
      deleteEvent(event.id);
    }
  };

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

        <button className="delete" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default EventCard;