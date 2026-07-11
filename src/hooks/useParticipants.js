import { useContext } from "react";
import { ParticipantContext } from "../context/ParticipantContext";

function useParticipants() {
  return useContext(ParticipantContext);
}

export default useParticipants;