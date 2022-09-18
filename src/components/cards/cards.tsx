import Container from "./container";
import { DivCard, DivTitle, IconCard, TitleCard, Valor } from "./style";
import { BiDownArrowCircle, BiUpArrowCircle, BiDollar } from "react-icons/bi";

function Cards() {
    return (
        <Container>
            <DivCard>
                <DivTitle>
                    <TitleCard>Entradas</TitleCard>
                    <IconCard>
                        <BiUpArrowCircle 
                            color="green"
                            size="35px"
                        />
                    </IconCard>
                </DivTitle>
                <Valor>R$ 2500,00</Valor>
            </DivCard>
            <DivCard>
                <DivTitle>
                    <TitleCard>Saídas</TitleCard>
                    <IconCard>
                        <BiDownArrowCircle 
                            color="red"
                            size="35px"
                        />
                    </IconCard>
                </DivTitle>
                <Valor>R$ 1500,00</Valor>
            </DivCard>
            <DivCard>
                <DivTitle>
                    <TitleCard>Total</TitleCard>
                    <IconCard>
                        <BiDollar 
                            color="grey"
                            size="35px"
                        />
                    </IconCard>
                </DivTitle>
                <Valor>R$ 1000,00</Valor>
            </DivCard>
        </Container>
    )
}

export default Cards;