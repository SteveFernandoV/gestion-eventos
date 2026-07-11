import { createContext, useEffect, useState } from "react";
import participantService from "../services/participantService";

export const ParticipantContext = createContext();

export const ParticipantProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    loadParticipants();
  }, []);

  const loadParticipants = async () => {
    try {
      const data = await participantService.getAll();
      setParticipants(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addParticipant = async (participant) => {
    const newParticipant = await participantService.create(participant);
    setParticipants((prev) => [...prev, newParticipant]);
  };

  const updateParticipant = async (participant) => {
    const updated = await participantService.update(participant);

    setParticipants((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  const deleteParticipant = async (id) => {
    await participantService.remove(id);

    setParticipants((prev) =>
      prev.filter((p) => p.id !== id)
    );
  };

  return (
    <ParticipantContext.Provider
      value={{
        participants,
        addParticipant,
        updateParticipant,
        deleteParticipant,
      }}
    >
      {children}
    </ParticipantContext.Provider>
  );
};