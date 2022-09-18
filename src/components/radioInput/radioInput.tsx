import Container from "./container";
import { DivInput, Input, Label } from "./style";

function RadioInput() {
    return (
        <Container>
            <DivInput>
                <Input 
                    type="radio"
                    value="entrada"
                    name="tipo"
                />
                <Label>Entrada</Label>
            </DivInput>
            <DivInput>
                <Input 
                    type="radio"
                    value="saida"
                    name="tipo"
                />
                <Label>Saída</Label>
            </DivInput>
        </Container>
    )
}

export default RadioInput;