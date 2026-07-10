import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ParticipantForm from "../components/ParticipantForm/ParticipantForm";
import { useState } from "react";

function Participants() {
  const [participants, setParticipants] = useState([]);

  const addParticipant = (participant) => {
    setParticipants([
      ...participants,
      {
        id: Date.now(),
        ...participant,
      },
    ]);
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <ParticipantForm addParticipant={addParticipant} />

        <h2 style={{ marginTop: "40px" }}>
          Lista de Participantes
        </h2>

        {participants.length === 0 ? (
          <p>No hay participantes registrados.</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
              </tr>
            </thead>

            <tbody>
              {participants.map((participant) => (
                <tr key={participant.id}>
                  <td>{participant.name}</td>
                  <td>{participant.email}</td>
                  <td>{participant.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Participants;