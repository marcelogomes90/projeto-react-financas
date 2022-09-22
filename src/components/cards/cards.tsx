import Container from "./container";
import { DivCard, DivTitle, IconCard, TitleCard, Valor } from "./style";
import { BiDownArrowCircle, BiUpArrowCircle, BiDollar } from "react-icons/bi";
import { total, totalEntradas, totalSaidas } from "../../service/service";

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
                <Valor>R$ {totalEntradas}</Valor>
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
                <Valor>R$ {totalSaidas}</Valor>
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
                <Valor>R$ {total}</Valor>
            </DivCard>
        </Container>
    )
}

export default Cards;