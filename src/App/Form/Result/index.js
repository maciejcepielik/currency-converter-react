import "./style.css";

const Result = ({ result }) => (
    <p className="form__result">
        Podana kwota w wybranej walucie wynosi:<strong> {parseFloat(result).toFixed(2)} PLN</strong>
    </p>
);

export default Result;