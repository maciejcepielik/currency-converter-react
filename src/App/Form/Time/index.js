import { useEffect, useState } from "react";
import { FormTime } from "./styled";

const Time = () => {
    const useCurrentDate = () => {
        const [currentDate, setCurrentDate] = useState(new Date());

        useEffect(() => {
            const timeInterval = setInterval(() => {
                setCurrentDate(new Date())
            }, 1000);

            return () => {
                clearInterval(timeInterval);
            }
        }, []);

        return currentDate;
    };

    const currentDate = useCurrentDate();

    return (
        <FormTime>
            Dzisiaj jest&nbsp;
            {currentDate.toLocaleDateString(
                undefined,
                {
                    month: "long",
                    weekday: "long",
                    day: "numeric",
                }
            )}, {currentDate.toLocaleTimeString()}
        </FormTime>
    );
};

export default Time;