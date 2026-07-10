import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EventForm from "../components/EventForm/EventForm";

function NewEvent() {
  return (
    <>
      <Navbar />

      <EventForm />

      <Footer />
    </>
  );
}

export default NewEvent;