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
    font-size: 18px;
    font-weight: bold; 

    @media (min-width: 1367px) {
        width: 240px;
        font-size: 20px;
    }

    @media (max-width: 1024px) {
        width: 150px;
        font-size: 16px;
    }

    @media (max-width: 850px) {
        width: 120px;
    }

    @media (max-width: 620px) {
        width: 65px;
        font-size: 10px;
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
    font-size: 18px;

    @media (min-width: 1367px) {
        width: 240px;
        font-size: 20px;
    }

    @media (max-width: 1024px) {
        width: 150px;
        font-size: 16px;
    }

    @media (max-width: 850px) {
        width: 120px;
    }

    @media (max-width: 620px) {
        width: 65px;
        font-size: 10px;
    }
`

export const DivItemLixeira = styled.div`
    width: 190px;
    cursor: pointer;

    @media (min-width: 1367px) {
        width: 240px;
    }

    @media (max-width: 1024px) {
        width: 150px;
    }

    @media (max-width: 850px) {
        width: 120px;
    }

    @media (max-width: 620px) {
        width: 65px;
        font-size: 10px;
    }

`
