import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 620px;
    margin: 0 auto;
    padding: 20px;
`;

export const FormFieldset = styled.fieldset`
    border: 2px solid rgb(0, 0, 0);
    border-radius: 5px;
    margin: 20px 5px 5px;
    padding: 10px 20px;
    background: hsl(0, 0%, 96%);
`;

export const FormLegend = styled.legend`
    background-color: black;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    font-size: 30px;
    font-style: italic;
`;

export const FormList = styled.ul`
    padding-left: 15px;
`;

export const FormItem = styled.li`
    list-style: none;
    padding: 3px 0;
`;

export const FormCurrency = styled.span`
    padding-left: 3px;
`;

export const FormLabelText = styled.span`
    display: inline-block;
    max-width: 160px;
    width: 100%;
    margin-right: 5px;
`;

export const FormButton = styled.button`
    background: hsl(0, 0%, 80%);
    border: 1px solid hsl(0, 0%, 10%);
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 10px;
    font-weight: bold;
`;

export const FormParagraph = styled.p`
    text-align: center;
`;

export const FormField = styled.input`
    max-width: 350px;
    width: 100%;
    padding: 5px;
    border: 1px solid;
    border-radius: 3px;
    text-align: center;
`;

export const FormWarning = styled.p`
    font-style: italic;
    color: rgb(255, 255, 255);
    font-size: medium;
    text-align: right;
    margin: 5px;
`;