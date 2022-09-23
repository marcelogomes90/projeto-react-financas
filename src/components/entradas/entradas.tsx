import { useContext, useEffect } from "react";
import { BiDownArrowCircle, BiUpArrowCircle, BiTrash } from "react-icons/bi";
import MyContext from "../../context/MyContext";
import { arrayEntrada } from "../../service/service";
import Container from "./container";
import { DivEntrada, DivItemEntrada, DivItemLixeira, DivItemTitulo, DivTitulo } from "./style";

function Entradas() {

    const {novaEntrada}: any = useContext(MyContext);

    useEffect(() => {
        
    }, [novaEntrada.id] )

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
                <DivItemEntrada>{`${entrada.nome}`}</DivItemEntrada>
                <DivItemEntrada style={{color: entrada.tipo == 'Entrada' ? 'green' : 'red'}}>{`R$ ${parseFloat(entrada.valor).toFixed(2)}`}</DivItemEntrada>
                <DivItemEntrada>{`${entrada.categoria}`}</DivItemEntrada>
                <DivItemEntrada>{ entrada.tipo == 'Entrada' ? <BiUpArrowCircle color='green' size='24px'></BiUpArrowCircle> : <BiDownArrowCircle color='red' size='24px'></BiDownArrowCircle>}</DivItemEntrada>
                <DivItemLixeira><BiTrash color='black' size='24px'></BiTrash></DivItemLixeira>
            </DivEntrada>

            ))}
        </Container>
    )
}

export default Entradas;