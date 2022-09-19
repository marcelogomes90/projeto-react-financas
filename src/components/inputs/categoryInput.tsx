import { useState } from "react";
import { DivInput, Input, Label } from "./style";

function CategoryInput() {

    const [valueCategory, setValueCategory] = useState('');

    const handleCategoryChange = (event: any) => {
        setValueCategory(event.target.value)
    };

    return (
        <DivInput>
            <Label>Categoria</Label>
            <Input 
                type="text"
                value={valueCategory}
                onChange={(event) => handleCategoryChange(event)}
            />
        </DivInput>
    )
}

export default CategoryInput;