import { FormTime } from "./styled";
import { useCurrentDate } from "./useCurrentData";

const Time = () => {
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