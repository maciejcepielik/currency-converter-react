import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p>Wybierz walutę:</p>
            <ul className="form__list">
                <li className="form__item">
                    <label>
                        <input type="radio" name="currency" required /> <span
                            className="form__currency">Euro
                            (EUR)</span>
                    </label>
                </li>
                <li className="form__item">
                    <label>
                        <input type="radio" name="currency" /> <span
                            className="form__currency">Dolar
                            amerykański (USD)</span>
                    </label>
                </li>
                <li className="form__item">
                    <label>
                        <input type="radio" name="currency" /> <span
                            className="form__currency">Frank
                            Szwajcarski (CHF)</span>
                    </label>
                </li>
                <li className="form__item">
                    <label>
                        <input type="radio" name="currency" /> <span
                            className="form__currency">Funt
                            brytyjski (GBP)</span>
                    </label>
                </li>
            </ul>
            <p>
                <label>
                    <span className="form__labelText">Aktualny kurs (PLN)*: </span><input
                        className="form__field" name="exchangeRate" readonly />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Kwota <span></span>: </span><input
                        className="form__field" type="number" name="amount" step="0.01" min="0.00"
                        placeholder="Tutaj wpisz kwotę w wybranej walucie" required />
                </label>
            </p>
            <p className="form__paragraph">
                <button className="form__button">Oblicz</button>
            </p>
            <p className="form__paragraph form__paragraph--result">Podana kwota w wybranej walucie wynosi: <strong></strong>
            </p>
        </fieldset>
        <p className="form__warning">*Kurs z dnia 15.05.2023r.</p>
    </form>
);

export default Form;