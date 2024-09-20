import { useState } from "react";
import Result from "./Result";
import Time from "./Time";
import { StyledForm, FormFieldset, FormLegend, FormList, FormItem, FormCurrency, FormLabelText, FormButton, FormParagraph, FormField, FormWarning } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <FormFieldset >
                <FormLegend>Kalkulator walut</FormLegend>
                <Time />
                <p>Wybierz walutę:</p>
                <FormList>
                    {currencies.map(currency => (
                        <FormItem key={currency.id}>
                            <label>
                                <input
                                    type="radio"
                                    name="currency"
                                    value={currency.id}
                                    onChange={onCheckChange}
                                    required
                                />
                                <FormCurrency>
                                    {currency.name} ({currency.shortcut})
                                </FormCurrency>
                            </label>
                        </FormItem>
                    ))}
                </FormList>
                <p>
                    <label>
                        <FormLabelText>Aktualny kurs (PLN)*: </FormLabelText>
                        <FormField
                            value={exchangeRate}
                            name="exchangeRate"
                            readOnly
                            placeholder="Wybierz walutę"
                        >
                        </FormField>
                    </label>
                </p>
                <p>
                    <label>
                        <FormLabelText>
                            Kwota {currencyShortcut}:
                        </FormLabelText>
                        <FormField
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            name="amount"
                            step="0.01"
                            min="0.00"
                            placeholder="Tutaj wpisz kwotę w wybranej walucie"
                            required
                        >
                        </FormField>
                    </label>
                </p>
                <FormParagraph>
                    <FormButton>Oblicz</FormButton>
                </FormParagraph>
                <Result result={result} />
            </FormFieldset>
            <FormWarning>*Kurs z dnia 27.05.2024r.</FormWarning>
        </StyledForm>
    )
};

export default Form;