import { useContext } from "react";
import MyContext from "../../context/MyContext";
import Container from "./container";
import { DivInput, Input, Label } from "./style";

function RadioInput() {

    const {novaEntrada, setNovaEntrada}: any = useContext(MyContext);

    const handleRadioChange = (event: any) => {
        setNovaEntrada({...novaEntrada, tipo: event.target.value})
        console.log(novaEntrada)
    };

    return (
        <Container>
            <DivInput>
                <Input 
                    type="radio"
                    value="Entrada"
                    name="tipo"
                    onClick={(event) => handleRadioChange(event)}
                />
                <Label>Entrada</Label>
            </DivInput>
            <DivInput>
                <Input 
                    type="radio"
                    value="Saida"
                    name="tipo"
                    onClick={(event) => handleRadioChange(event)}
                />
                <Label>Saída</Label>
            </DivInput>
        </Container>
    )
}

export default RadioInput;