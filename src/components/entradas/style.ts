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
`

export const DivItemTitulo = styled.div`
    color: #000000;
    width: 200px;
    font-weight: bold; 

    @media (min-width: 1365px) {
        width: 250px;
    }
`
export const DivEntrada = styled.div`
    background-color: #FFFFFF;
    border-radius: 20px;
    margin-bottom: 10px;
    height: 45px;
    line-height: 45%;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const DivItemEntrada = styled.div`
    width: 200px;

    @media (min-width: 1365px) {
        width: 250px;
    }
`

export const Texto = styled.span`
    font-size: 18px;
`


