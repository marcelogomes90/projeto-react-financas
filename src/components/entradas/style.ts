import styled from "styled-components";

export const DivTitulo = styled.div`
    height: 45px;
    line-height: 100%;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    text-align: center;
    line-height: 100%;
    margin-bottom: 10px;
    line-height: 40px;
`

export const DivItemTitulo = styled.div`
    color: #000000;
    width: 190px;
    font-weight: bold; 

    @media (min-width: 1365px) {
        width: 240px;
    }
`
export const DivEntrada = styled.div`
    background-color: #FFFFFF;
    border-radius: 20px;
    margin-bottom: 10px;
    height: 45px;
    line-height: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const DivItemEntrada = styled.div`
    width: 190px;

    @media (min-width: 1365px) {
        width: 240px;
    }
`

export const Texto = styled.span`
    font-size: 18px;
`

export const DivItemLixeira = styled.div`
    width: 190px;
    cursor: pointer;

    @media (min-width: 1365px) {
        width: 240px;
    }
`
