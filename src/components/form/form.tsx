import Button from "../button/button";
import RadioInput from "../radioInput/radioInput";
import TextInput from "../textInput/textInput";
import Container from "./container";
import DivForm from "./style";

function Form() {
    return (
        <Container>
            <DivForm>
                <TextInput />
            </DivForm>
            <DivForm>
                <RadioInput />
            </DivForm>
            <DivForm>
                <Button />
            </DivForm>
        </Container>
    )
}

export default Form;