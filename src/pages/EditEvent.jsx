import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useEvents from "../hooks/useEvents";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { events, updateEvent } = useEvents();

  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const event = events.find((e) => String(e.id) === id);

    if (event) {
      setForm(event);
    }
  }, [id, events]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateEvent(form);

    alert("Evento actualizado correctamente");

    navigate("/events");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Editar Evento</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="title"
            value={form.title}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="location"
            value={form.location}
            onChange={handleChange}
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <button className="btn btn-success w-100">
            Guardar Cambios
          </button>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default EditEvent;