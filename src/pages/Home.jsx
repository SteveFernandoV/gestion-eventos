import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          padding: "60px 20px",
          minHeight: "80vh",
          textAlign: "center",
        }}
      >
        <h1>Sistema de Gestión de Eventos</h1>

        <p>Bienvenido al sistema de administración de eventos.</p>

        <br />

        <h2>Funciones del sistema</h2>

        <p>✔ Registrar eventos</p>
        <p>✔ Administrar participantes</p>
        <p>✔ Inscribir participantes en eventos</p>
        <p>✔ Consultar información rápidamente</p>
      </main>

      <Footer />
    </>
  );
}

export default Home;