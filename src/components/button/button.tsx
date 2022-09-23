import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { arrayEntrada } from "../../service/service";
import SubmitButton from "./style"
import { somaEntradas } from './../../service/service';

function Button() {

    const {novaEntrada, setNovaEntrada}: any = useContext(MyContext);
    const [countArray, setCountArray] = useState(1);

    const sendObjtoArray = () => {

        if (novaEntrada.nome !== "" && novaEntrada.valor !== "" && novaEntrada.categoria !== "" && novaEntrada.tipo !== "") {
            setCountArray(countArray + 1);
            setNovaEntrada({...novaEntrada, id: countArray})
            arrayEntrada.push(novaEntrada);
            somaEntradas();
        }
        
    }

    return (
        <SubmitButton
            onClick={sendObjtoArray}
            id="botao"
        >Adicionar
        </SubmitButton>
    )

}

export default Button;