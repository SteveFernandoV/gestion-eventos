import api from "./api";

const enrollmentService = {

  async getAll() {
    const response = await api.get("/enrollments");
    return response.data;
  },

  async create(enrollment) {
    const response = await api.post("/enrollments", enrollment);
    return response.data;
  },

  async remove(id) {
    await api.delete(`/enrollments/${id}`);
  }

};

export default enrollmentService;