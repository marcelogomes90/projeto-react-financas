import { useState } from "react";
import { DivInput, Input, Label } from "./style";


function CurrencyInput() {

    const [valueCurrency, setValueCurrency] = useState('');

    const handleCurrencyChange = (event: any) => {
        setValueCurrency(event.target.value)
    };
    
    return (
        <DivInput>
            <Label>Valor</Label>
            <Input 
                type="number"
                pattern="^\\$?(([1-9](\\d*|\\d{0,2}(.\\d{3})*))|0)(\\,\\d{1,2})?R$"
                value={valueCurrency}
                onChange={(event) => handleCurrencyChange(event)}
            />
        </DivInput>
    )
}

export default CurrencyInput;
