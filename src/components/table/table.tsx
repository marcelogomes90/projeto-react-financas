import { BiDownArrowCircle, BiUpArrowCircle, BiTrash } from "react-icons/bi";
import Container from "./container";
import { Body, Coluna, ColunaHead, Head, Linha, Tabela } from "./style";

function Table() {
    return (
        <Container>
            <Tabela>
                <Head>
                    <Linha>
                        <ColunaHead>Descrição</ColunaHead>
                        <ColunaHead>Valor</ColunaHead>
                        <ColunaHead>Categoria</ColunaHead>
                        <ColunaHead>Tipo</ColunaHead>
                        <ColunaHead>Deletar</ColunaHead>
                    </Linha>
                </Head>
                <Body>
                    <Linha>
                        <Coluna>Cinema</Coluna>
                        <Coluna style={{color: "red"}}>R$ 1200,00</Coluna>
                        <Coluna>Lazer</Coluna>
                        <Coluna><BiDownArrowCircle color="red" size="24px"></BiDownArrowCircle></Coluna>
                        <Coluna><BiTrash color="black" size="24px"></BiTrash></Coluna>
                    </Linha>
                    <Linha>
                        <Coluna>Salário</Coluna>
                        <Coluna style={{color: "green"}}>R$ 2500,00</Coluna>
                        <Coluna>Fixo</Coluna>
                        <Coluna><BiUpArrowCircle color="green" size="24px"></BiUpArrowCircle></Coluna>
                        <Coluna><BiTrash color="black" size="24px"></BiTrash></Coluna>
                    </Linha>
                </Body>
            </Tabela>
        </Container>
    )
}

export default Table;