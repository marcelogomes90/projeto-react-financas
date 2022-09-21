import { BiDownArrowCircle, BiUpArrowCircle, BiTrash } from "react-icons/bi";
import { arrayEntrada } from "../../service/service";
import Container from "./container";
import { DivEntrada, DivItemEntrada, DivItemTitulo, DivTitulo } from "./style";

function Entradas() {

    arrayEntrada?.map((entrada: any) => (console.log(entrada.tipo)))
    console.log(arrayEntrada);
    
    return (
        <Container>
            <DivTitulo>
                <DivItemTitulo>Descrição</DivItemTitulo>
                <DivItemTitulo>Valor</DivItemTitulo>
                <DivItemTitulo>Categoria</DivItemTitulo>
                <DivItemTitulo>Tipo</DivItemTitulo>
                <DivItemTitulo>Deletar</DivItemTitulo>
            </DivTitulo>
            {arrayEntrada?.map((entrada: any) => ( 
                <DivEntrada>
                    <DivItemEntrada>{`${entrada?.nome}`}</DivItemEntrada>
                    <DivItemEntrada style={{color: entrada.tipo == 'Entrada' ? 'green' : 'red'}}>{`R$ ${entrada?.valor}`}</DivItemEntrada>
                    <DivItemEntrada>{`${entrada?.categoria}`}</DivItemEntrada>
                    <DivItemEntrada>{ entrada.tipo == 'Entrada' ? <BiUpArrowCircle color='green' size='24px'></BiUpArrowCircle> : <BiDownArrowCircle color='red' size='24px'></BiDownArrowCircle>}</DivItemEntrada>
                    <DivItemEntrada><BiTrash color='black' size='24px'></BiTrash></DivItemEntrada>
                </DivEntrada>
            ))}
        </Container>
    )
}

export default Entradas;