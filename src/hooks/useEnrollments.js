import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";

function useEnrollments() {
  return useContext(EnrollmentContext);
}

export default useEnrollments;