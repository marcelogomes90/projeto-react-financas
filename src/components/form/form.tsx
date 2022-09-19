import Button from "../button/button";
import CurrencyInput from "../inputs/currencyInput";
import RadioInput from "../radioInput/radioInput";
import Container from "./container";
import DivForm from "./style";
import CategoryInput from "../inputs/categoryInput";
import NameInput from "../inputs/nameInput";

function Form() {
    return (
        <Container>
            <DivForm>
                <NameInput />
            </DivForm>
            <DivForm>
                <CurrencyInput />
            </DivForm>
            <DivForm>
                <CategoryInput />
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