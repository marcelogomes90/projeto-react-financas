import { useState } from "react";
import { DivInput, Input, Label } from "./style";

function NameInput() {

    const [valueDescription, setValueDescription] = useState('');

    const handleDescriptionChange = (event: any) => {
        setValueDescription(event.target.value)
    };

    return (
        <DivInput>
            <Label>Descrição</Label>
            <Input 
                type="text"
                value={valueDescription}
                onChange={(event) => handleDescriptionChange(event)}
            />
        </DivInput>
    )
}

export default NameInput;