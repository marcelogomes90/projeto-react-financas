import { useContext } from "react";
import MyContext from "../../context/MyContext";
import { arrayEntrada } from "../../service/service";
import SubmitButton from "./style"

function Button() {

    const {novaEntrada}: any = useContext(MyContext);

    const SendObjStorage = () => {

        if (novaEntrada.nome !== "" && novaEntrada.valor !== "" && novaEntrada.categoria !== "" && novaEntrada.tipo !== "") {
            arrayEntrada.push(novaEntrada);
        } else {
            alert('Preencha todos os campos!')
        }
        
    }

    return (
        <SubmitButton
            onClick={SendObjStorage}
            type="button"
        >Adicionar
        </SubmitButton>
    )

}

export default Button;