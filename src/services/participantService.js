import api from "./api";

const participantService = {

  async getAll() {
    const response = await api.get("/participants");
    return response.data;
  },

  async create(participant) {
    const response = await api.post("/participants", participant);
    return response.data;
  },

  async update(participant) {
    const response = await api.put(
      `/participants/${participant.id}`,
      participant
    );

    return response.data;
  },

  async remove(id) {
    await api.delete(`/participants/${id}`);
  }

};

export default participantService;