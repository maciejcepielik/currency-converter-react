import { useEffect, useState } from "react";
import "./style.css";

const Time = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        console.log("Wywołanie");
        const timeInterval = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000);

        return () => {
            console.log("Odmontowanie");
            clearInterval(timeInterval);
        }
    }, []);

    return (
        <p className="form_time">
            Dzisiaj jest&nbsp;
            {currentDate.toLocaleDateString(
                undefined,
                {
                    month: "long",
                    weekday: "long",
                    day: "numeric",
                }
            )}, {currentDate.toLocaleTimeString()}
        </p>
    );
};

export default Time;