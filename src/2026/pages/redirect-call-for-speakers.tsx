import { CALL_FOR_SPEAKERS_URL } from "@/2026/constants/urls";
import { useEffect } from "react";

const RedirectCallForSpeakers = () => {
  useEffect(() => {
    window.location.replace(CALL_FOR_SPEAKERS_URL);
  }, []);

  return null;
};

export default RedirectCallForSpeakers;
