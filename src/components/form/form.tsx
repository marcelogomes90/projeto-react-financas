import Button from "../button/button";
import CurrencyInput from "../inputs/currencyInput";
import RadioInput from "../radioInput/radioInput";
import Container from "./container";
import DivForm from "./style";
import CategoryInput from "../inputs/categoryInput";
import NameInput from "../inputs/nameInput";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

function Form() {

    const {novaEntrada, setNovaEntrada}: any = useContext(MyContext);
    const clearForm: any = document.querySelector('.form');

    window.addEventListener('submit', (event) => {
        event.preventDefault();

        if (novaEntrada.nome !== "" && novaEntrada.valor !== "" && novaEntrada.categoria !== "" && novaEntrada.tipo !== "") {
            clearForm.reset();
            setNovaEntrada({...novaEntrada, nome: "", valor: "", categoria: "", tipo: ""})
        }

    })

    return (
        <Container className="form">
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