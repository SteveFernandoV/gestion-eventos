import "./EventCard.css";
import { useNavigate } from "react-router-dom";
import useEvents from "../../hooks/useEvents";

function EventCard({ event }) {
  const navigate = useNavigate();
  const { deleteEvent } = useEvents();

  const handleEdit = () => {
    navigate(`/edit-event/${event.id}`);
  };

  const handleDelete = () => {
    if (window.confirm(`¿Desea eliminar el evento "${event.title}"?`)) {
      deleteEvent(event.id);
    }
  };

  return (
    <div className="event-card">
      <div className="event-header">
        <h2>{event.title}</h2>
      </div>

      <div className="event-info">
        <p>
          <strong>📅 Fecha:</strong> {event.date}
        </p>

        <p>
          <strong>📍 Lugar:</strong> {event.location}
        </p>

        <p>{event.description}</p>
      </div>

     <div className="buttons">
  <button
    className="btn btn-primary"
    onClick={handleEdit}
  >
    Editar
  </button>

  <button
    className="btn btn-danger"
    onClick={handleDelete}
  >
    Eliminar
  </button>
</div>
    </div>
  );
}

export default EventCard;