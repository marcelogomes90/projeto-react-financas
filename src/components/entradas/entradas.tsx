import { BiDownArrowCircle, BiUpArrowCircle, BiTrash } from "react-icons/bi";
import Container from "./container";
import { DivEntrada, DivItemEntrada, DivItemTitulo, DivTitulo } from "./style";

function Entradas() {
    return (
        <Container>
            <DivTitulo>
                <DivItemTitulo>Descrição</DivItemTitulo>
                <DivItemTitulo>Valor</DivItemTitulo>
                <DivItemTitulo>Categoria</DivItemTitulo>
                <DivItemTitulo>Tipo</DivItemTitulo>
                <DivItemTitulo>Deletar</DivItemTitulo>
            </DivTitulo>
            <DivEntrada>
                <DivItemEntrada>Cinema</DivItemEntrada>
                <DivItemEntrada style={{color: "red"}}>R$ 1200,00</DivItemEntrada>
                <DivItemEntrada>Lazer</DivItemEntrada>
                <DivItemEntrada><BiDownArrowCircle color="red" size="24px"></BiDownArrowCircle></DivItemEntrada>
                <DivItemEntrada><BiTrash color="black" size="24px"></BiTrash></DivItemEntrada>
            </DivEntrada>
            <DivEntrada>
                <DivItemEntrada>Salário</DivItemEntrada>
                <DivItemEntrada style={{color: "green"}}>R$ 2500,00</DivItemEntrada>
                <DivItemEntrada>Fixo</DivItemEntrada>
                <DivItemEntrada><BiUpArrowCircle color="green" size="24px"></BiUpArrowCircle></DivItemEntrada>
                <DivItemEntrada><BiTrash color="black" size="24px"></BiTrash></DivItemEntrada>
            </DivEntrada>
        </Container>
    )
}

export default Entradas;