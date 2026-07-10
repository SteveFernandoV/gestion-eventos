import { useParams, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EventForm from "../components/EventForm/EventForm";
import useEvents from "../hooks/useEvents";

function EditEvent() {
  const { id } = useParams();
  const { events } = useEvents();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <>
      <Navbar />
      <EventForm eventToEdit={event} />
      <Footer />
    </>
  );
}

export default EditEvent;