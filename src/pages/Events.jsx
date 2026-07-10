import EventCard from "../components/EventCard/EventCard";

function Events() {

  const events = [

    {
      id:1,
      title:"Conferencia de Tecnología",
      date:"15/08/2026",
      location:"Cusco",
      description:"Evento sobre innovación tecnológica."
    },

    {
      id:2,
      title:"Hackathon Universitario",
      date:"20/08/2026",
      location:"Universidad Continental",
      description:"Competencia de programación."
    },

    {
      id:3,
      title:"Curso de React",
      date:"28/08/2026",
      location:"Virtual",
      description:"Curso intensivo de React."
    }

  ];

  return (

    <div style={{padding:"40px"}}>

      <h1 style={{textAlign:"center"}}>

        Eventos

      </h1>

      <div
        style={{
          display:"flex",
          justifyContent:"center",
          gap:"25px",
          flexWrap:"wrap",
          marginTop:"40px"
        }}
      >

        {events.map(event=>(
          <EventCard
            key={event.id}
            event={event}
          />
        ))}

      </div>

    </div>

  );

}

export default Events;