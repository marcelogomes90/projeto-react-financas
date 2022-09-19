import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { DivInput, Input, Label } from "./style";

function NameInput() {

    const {novaEntrada, setNovaEntrada}: any = useContext(MyContext);

    const handleNameChange = (event: any) => {
        setNovaEntrada({...novaEntrada, nome: event.target.value})
    };

    return (
        <DivInput>
            <Label>Descrição</Label>
            <Input 
                required
                type="text"
                name="descricao"
                maxLength={25}
                value={novaEntrada.nome}
                onChange={(event) => handleNameChange(event)}
            />
        </DivInput>
    )
}

export default NameInput;