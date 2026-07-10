import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useEvents from "../../hooks/useEvents";
import "./EventForm.css";

function EventForm({ eventToEdit }) {
  const { addEvent, updateEvent } = useEvents();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (eventToEdit) {
      setForm(eventToEdit);
    }
  }, [eventToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventToEdit) {
      updateEvent(form);
      alert("Evento actualizado correctamente.");
    } else {
      addEvent(form);
      alert("Evento registrado correctamente.");
    }

    navigate("/events");
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>{eventToEdit ? "Editar Evento" : "Registrar Evento"}</h2>

      <input
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Lugar"
        value={form.location}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {eventToEdit ? "Actualizar Evento" : "Guardar Evento"}
      </button>
    </form>
  );
}

export default EventForm;