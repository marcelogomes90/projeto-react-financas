import { useState } from "react";
import { DivInput, Input, Label } from "./style";
import Container from "./container";
import CurrencyInput from "react-currency-input-field";

function TextInput() {

    const [valueCurrency, setValueCurrency] = useState();
    const [valueDescription, setValueDescription] = useState('');

    const styleCurrency = {
        width: "250px",
        height: "35px",
        borderRadius: "5px",
        border: "solid",
        borderWidth: "1px",
        borderColor: "grey",
        padding: "5px 10px",
        fontSize: "medium",
        outlineColor: "#570bad70"
    };

    const handleCurrencyChange = (value: any) => {
        setValueCurrency(value)
    };

    const handleDescriptionChange = (event: any) => {
        setValueDescription(event.target.value)
    };

    return (
        <Container>
            <DivInput>
                <Label>Descrição</Label>
                <Input 
                    type="text"
                    value={valueDescription}
                    onChange={(event) => {handleDescriptionChange(event)}}
                />
            </DivInput>
            <DivInput>
                <Label>Valor</Label>
                <CurrencyInput
                    style={styleCurrency}
                    intlConfig={{ locale: 'pt-br', currency: 'BRL' }}
                    decimalsLimit={2}
                    onValueChange={handleCurrencyChange}
                />
            </DivInput>
        </Container>
    )
}

export default TextInput;