import { useState } from "react";
import "./ParticipantForm.css";

function ParticipantForm({ addParticipant }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addParticipant(form);

    setForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <form className="participant-form" onSubmit={handleSubmit}>
      <h2>Registrar Participante</h2>

      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Registrar Participante
      </button>
    </form>
  );
}

export default ParticipantForm;