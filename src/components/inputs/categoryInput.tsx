import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { DivInput, Input, Label } from "./style";

function CategoryInput() {

    const {novaEntrada, setNovaEntrada}: any = useContext(MyContext);

    const handleCategoryChange = (event: any) => {
        setNovaEntrada({...novaEntrada, categoria: event.target.value})
    };

    return (
        <DivInput>
            <Label>Categoria</Label>
            <Input 
                required
                type="text"
                name="categoria"
                maxLength={25}
                value={novaEntrada.categoria}
                onChange={(event) => handleCategoryChange(event)}
            />
        </DivInput>
    )
}

export default CategoryInput;