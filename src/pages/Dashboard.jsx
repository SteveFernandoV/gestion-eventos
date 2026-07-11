import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import useEvents from "../hooks/useEvents";
import useParticipants from "../hooks/useParticipants";
import "./Dashboard.css";

function Dashboard() {

    const { events } = useEvents();
    const { participants } = useParticipants();

    return(

        <>

        <Navbar/>

        <div className="dashboard">

            <h1>Dashboard</h1>

            <div className="cards">

                <div className="card">

                    <h2>{events.length}</h2>

                    <p>Eventos</p>

                </div>

                <div className="card">

                    <h2>{participants.length}</h2>

                    <p>Participantes</p>

                </div>

                <div className="card">

                    <h2>{events.length + participants.length}</h2>

                    <p>Total Registros</p>

                </div>

            </div>

        </div>

        <Footer/>

        </>

    );

}

export default Dashboard;