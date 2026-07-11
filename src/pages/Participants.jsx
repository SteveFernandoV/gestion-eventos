import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ParticipantForm from "../components/ParticipantForm/ParticipantForm";
import useParticipants from "../hooks/useParticipants";

function Participants() {
  const {
    participants,
    addParticipant,
    deleteParticipant,
  } = useParticipants();

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <ParticipantForm addParticipant={addParticipant} />

        <h2>Lista de Participantes</h2>

        {participants.length === 0 ? (
          <p>No hay participantes registrados.</p>
        ) : (
          <table
            style={{
              width: "100%",
              marginTop: "20px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {participants.map((participant) => (
                <tr key={participant.id}>
                  <td>{participant.name}</td>
                  <td>{participant.email}</td>
                  <td>{participant.phone}</td>
                  <td>
                    <button
  className="btn btn-danger btn-sm"
  onClick={() => deleteParticipant(participant.id)}
>
  Eliminar
</button>
                  </td>
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