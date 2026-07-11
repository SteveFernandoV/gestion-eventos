import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import useEvents from "../hooks/useEvents";
import useParticipants from "../hooks/useParticipants";
import useEnrollments from "../hooks/useEnrollments";

function EnrollParticipant() {
  const { events } = useEvents();
  const { participants } = useParticipants();
  const { enrollments, addEnrollment, deleteEnrollment } = useEnrollments();

  const [participantId, setParticipantId] = useState("");
  const [eventId, setEventId] = useState("");

 const register = async () => {
  console.log("Participantes:", participants);
  console.log("Eventos:", events);
  console.log("participantId:", participantId);
  console.log("eventId:", eventId);

  if (!participantId || !eventId) {
    alert("Seleccione un participante y un evento");
    return;
  }

  const participant = participants.find(
    (p) => String(p.id) === String(participantId)
  );

  const event = events.find(
    (e) => String(e.id) === String(eventId)
  );

  console.log("Participante encontrado:", participant);
  console.log("Evento encontrado:", event);

  if (!participant || !event) {
    alert("No se encontró el participante o el evento.");
    return;
  }

  await addEnrollment({
    participant: participant.name,
    event: event.title,
  });

  console.log("Inscripción guardada");

  alert("Participante inscrito correctamente.");

  setParticipantId("");
  setEventId("");
};

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Inscribir Participante</h1>

        <br />

        <select
          value={participantId}
          onChange={(e) => setParticipantId(e.target.value)}
        >
          <option value="">Seleccione participante</option>

          {participants.map((participant) => (
            <option
              key={participant.id}
              value={participant.id}
            >
              {participant.name}
            </option>
          ))}
        </select>

        <br />
        <br />

        <select
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
        >
          <option value="">Seleccione evento</option>

          {events.map((event) => (
            <option
              key={event.id}
              value={event.id}
            >
              {event.title}
            </option>
          ))}
        </select>

        <br />
        <br />

        <button onClick={register}>
          Inscribir
        </button>

        <hr />

        <h2>Participantes Inscritos</h2>

        <table
          border="1"
          cellPadding="10"
          style={{
            margin: "20px auto",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Participante</th>
              <th>Evento</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id}>
                <td>{enrollment.participant}</td>
                <td>{enrollment.event}</td>
                <td>
                  <button
                    onClick={() =>
                      deleteEnrollment(enrollment.id)
                    }
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default EnrollParticipant;