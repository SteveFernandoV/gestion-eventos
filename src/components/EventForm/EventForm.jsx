import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEvents from "../../hooks/useEvents";
import "./EventForm.css";

function EventForm({ eventToEdit }) {

  const navigate = useNavigate();

  const { addEvent, updateEvent } = useEvents();

  const [form,setForm]=useState({
      title:"",
      date:"",
      location:"",
      description:""
  });

  useEffect(()=>{

      if(eventToEdit){

          setForm(eventToEdit);

      }

  },[eventToEdit]);

  const handleChange=(e)=>{

      setForm({

          ...form,

          [e.target.name]:e.target.value

      });

  };

  const handleSubmit=(e)=>{

      e.preventDefault();

      if(eventToEdit){

          updateEvent(form);

      }else{

          addEvent(form);

      }

      navigate("/events");

  };

  return(

      <div className="form-container">

      <form
      className="event-form"
      onSubmit={handleSubmit}
      >

      <h2>

      {eventToEdit ? "Editar Evento" : "Registrar Evento"}

      </h2>

      <input
      name="title"
      placeholder="Título"
      value={form.title}
      onChange={handleChange}
      required
      />

      <input
      type="date"
      name="date"
      value={form.date}
      onChange={handleChange}
      required
      />

      <input
      name="location"
      placeholder="Lugar"
      value={form.location}
      onChange={handleChange}
      required
      />

      <textarea
      name="description"
      placeholder="Descripción"
      value={form.description}
      onChange={handleChange}
      />

      <button>

      {eventToEdit ? "Actualizar" : "Guardar"}

      </button>

      </form>

      </div>

  );

}

export default EventForm;