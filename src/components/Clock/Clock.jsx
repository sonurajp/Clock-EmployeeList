import { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "./Clock.css";

dayjs.extend(utc);
dayjs.extend(timezone);

const Clock = () => {
  const [time, setTime] = useState(dayjs());
  const [isIST, setIsIST] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleTimeZone = () => {
    setIsIST(!isIST);
  };

  const formatTime = (time) => {
    return isIST
      ? time.tz("Asia/Kolkata").format(`DD/MM/YYYY hh:mm:ss A [IST]`)
      : time.tz("America/Los_Angeles").format("DD/MM/YYYY hh:mm:ss A [PST]");
  };

  return (
    <div className="clock">
      <div className="time">{formatTime(time)}</div>
      <button className="clock-button" onClick={toggleTimeZone}>
        {isIST ? "Convert to PST" : "Convert to IST"}
      </button>
    </div>
  );
};

export default Clock;
