import { useContext } from "react";
import { EventContext } from "../context/EventContext";

function useEvents() {
  return useContext(EventContext);
}

export default useEvents;