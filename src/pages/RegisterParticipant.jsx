import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ParticipantForm from "../components/ParticipantForm/ParticipantForm";
import useParticipants from "../hooks/useParticipants";

function RegisterParticipant(){

    const { addParticipant } = useParticipants();

    return(

        <>

        <Navbar/>

        <ParticipantForm
        addParticipant={addParticipant}
        />

        <Footer/>

        </>

    );

}

export default RegisterParticipant;