import { useContext } from "react";
import MyContext from "../../context/MyContext";
import { DivInput, Input, Label } from "./style";

function CurrencyInput() {

    const {novaEntrada, setNovaEntrada}: any = useContext(MyContext);

    const handleCurrencyChange = (event: any) => {
        setNovaEntrada({...novaEntrada, valor: event.target.value})
    };
    
    return (
        <DivInput>
            <Label>Valor</Label>
            <Input 
                required
                defaultValue=""
                type="number"
                name="valor"
                onChange={(event) => handleCurrencyChange(event)}
            />
        </DivInput>
    )
}

export default CurrencyInput;
