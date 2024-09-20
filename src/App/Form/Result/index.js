import { FormResult } from "./styled";

const Result = ({ result }) => (
    <FormResult>
        Podana kwota w wybranej walucie wynosi:<strong> {parseFloat(result).toFixed(2)} PLN</strong>
    </FormResult>
);

export default Result;