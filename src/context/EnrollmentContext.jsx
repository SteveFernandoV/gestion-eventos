import { createContext, useEffect, useState } from "react";
import enrollmentService from "../services/enrollmentService";

export const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    loadEnrollments();
  }, []);

  const loadEnrollments = async () => {
    const data = await enrollmentService.getAll();
    setEnrollments(data);
  };

  const addEnrollment = async (enrollment) => {

    const newEnrollment =
      await enrollmentService.create(enrollment);

    setEnrollments([
      ...enrollments,
      newEnrollment
    ]);

  };

  const deleteEnrollment = async (id) => {

    await enrollmentService.remove(id);

    setEnrollments(
      enrollments.filter(
        (e) => e.id !== id
      )
    );

  };

  return (

    <EnrollmentContext.Provider
      value={{
        enrollments,
        addEnrollment,
        deleteEnrollment,
      }}
    >
      {children}
    </EnrollmentContext.Provider>

  );

};