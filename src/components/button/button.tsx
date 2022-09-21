import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { arrayEntrada } from "../../service/service";
import SubmitButton from "./style"

function Button() {

    const {novaEntrada, setNovaEntrada}: any = useContext(MyContext);

    const [countArray, setCountArray] = useState(1);

    const sendObjtoArray = () => {

        setCountArray(countArray + 1);

        setNovaEntrada({...novaEntrada, count: countArray})

        if (novaEntrada.nome !== "" && novaEntrada.valor !== "" && novaEntrada.categoria !== "" && novaEntrada.tipo !== "") {
            arrayEntrada.push(novaEntrada);
        } 

    }

    return (
        <SubmitButton
            onClick={sendObjtoArray}
            type="button"
        >Adicionar
        </SubmitButton>
    )

}

export default Button;