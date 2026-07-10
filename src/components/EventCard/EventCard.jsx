import "./EventCard.css";
import { useNavigate } from "react-router-dom";
import useEvents from "../../hooks/useEvents";

function EventCard({ event }) {
  const navigate = useNavigate();
  const { deleteEvent } = useEvents();

  const handleDelete = () => {
    if (window.confirm(`¿Eliminar "${event.title}"?`)) {
      deleteEvent(event.id);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-event/${event.id}`);
  };

  return (
    <div className="event-card">
      <h2>{event.title}</h2>

      <p><strong>Fecha:</strong> {event.date}</p>

      <p><strong>Lugar:</strong> {event.location}</p>

      <p>{event.description}</p>

      <div className="buttons">
        <button className="edit" onClick={handleEdit}>
          Editar
        </button>

        <button className="delete" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default EventCard;