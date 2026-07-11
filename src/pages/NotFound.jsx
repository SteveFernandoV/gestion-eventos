import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function NotFound(){

    return(

        <>

        <Navbar/>

        <div
        style={{
            padding:"100px",
            textAlign:"center"
        }}
        >

        <h1>404</h1>

        <h2>Página no encontrada</h2>

        </div>

        <Footer/>

        </>

    );

}

export default NotFound;