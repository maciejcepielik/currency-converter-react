import { useState } from "react";
import "./style.css";

const Form = ({ currencies }) => {
    const [exchangeRate, setExchangeRate] = useState("0");

    const [currencyShortcut, setCurrencyShortcut] = useState("");

    const onCheckChange = ({ target }) => {
        const currency = currencies.find(currency => currency.id.toString() === target.value)

        setExchangeRate(currency ? currency.value : "0")
        setCurrencyShortcut(currency ? `(${currency.shortcut})` : "")
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>Wybierz walutę:</p>
                <ul className="form__list">
                    {currencies.map(currency => (
                        <li key={currency.id} className="form__item">
                            <label>
                                <input
                                    type="radio"
                                    name="currency"
                                    value={currency.id}
                                    onChange={onCheckChange}
                                />
                                <span className="form__currency">
                                    {currency.name} ({currency.shortcut})
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
                <p>
                    <label>
                        <span className="form__labelText">Aktualny kurs (PLN)*: </span>
                        <input
                            value={exchangeRate}
                            className="form__field"
                            name="exchangeRate"
                            readOnly
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota {currencyShortcut}:
                        </span>
                        <input
                            className="form__field"
                            type="number"
                            name="amount"
                            step="0.01"
                            min="0.00"
                            placeholder="Tutaj wpisz kwotę w wybranej walucie"
                            required
                        />
                    </label>
                </p>
                <p className="form__paragraph">
                    <button className="form__button">Oblicz</button>
                </p>
                <p className="form__paragraph form__paragraph--result">Podana kwota w wybranej walucie wynosi: <strong></strong>
                </p>
            </fieldset>
            <p className="form__warning">*Kurs z dnia 27.05.2024r.</p>
        </form>
    )
};

export default Form;