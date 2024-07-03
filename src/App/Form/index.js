import { useState } from "react";
import Result from "./Result";
import Time from "./Time";
import "./style.css";

const Form = ({ currencies }) => {
    const [exchangeRate, setExchangeRate] = useState("");
    const [currencyShortcut, setCurrencyShortcut] = useState("");
    const [result, setResult] = useState("0");
    const [amount, setAmount] = useState("");

    const onCheckChange = ({ target }) => {
        const currency = currencies.find(currency => currency.id.toString() === target.value)

        setExchangeRate(currency ? currency.value : "0")
        setCurrencyShortcut(currency ? `(${currency.shortcut})` : "")
        setResult("0");
        setAmount("");
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setResult(amount * exchangeRate)
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <Time />
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
                                    required
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
                            placeholder="Wybierz walutę"
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
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
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
                <Result result={result} />
            </fieldset>
            <p className="form__warning">*Kurs z dnia 27.05.2024r.</p>
        </form>
    )
};

export default Form;