import { useEffect, useState } from "react";

export const useCurrentDate = () => {
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