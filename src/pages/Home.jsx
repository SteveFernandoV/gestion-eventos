import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Home(){

    return(

        <>

        <Navbar/>

        <div
        style={{
            padding:"70px",
            textAlign:"center"
        }}
        >

            <h1 className="home-title">
  Sistema Web de Gestión de Eventos
</h1>
            <p>

            Plataforma para administrar eventos,
            participantes e inscripciones.

            </p>

            <br/>

            <img
            src="https://picsum.photos/900/300"
            style={{
                borderRadius:"12px",
                width:"80%"
            }}
            />

        </div>

        <Footer/>

        </>

    );

}

export default Home;