import api from "./api";

const eventService = {

  async getAll() {
    const response = await api.get("/events");
    return response.data;
  },

  async create(event) {
    const response = await api.post("/events", event);
    return response.data;
  },

  async update(event) {
    const response = await api.put(`/events/${event.id}`, event);
    return response.data;
  },

  async remove(id) {
    await api.delete(`/events/${id}`);
  }

};

export default eventService;