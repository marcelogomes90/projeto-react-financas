import styled from "styled-components";

export const DivCard = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 10px;
    color: #000000;
    background-color: #FFFFFF;

    @media (min-width: 1365px) {
        width: 430px;
    }

    @media (max-width: 1023px) {
        width: 200px;
    }

    @media (max-width: 767px) {
        width: 160px;
    }

    @media (max-width: 550px) {
        width: 300px;
    }

`

export const DivTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 40px 20px 20px 20px;
    width: 260px;
    height: 40px;

    @media (min-width: 1365px) {
        width: 390px;
    }

    @media (max-width: 1023px) {
        width: 160px;
    }

    @media (max-width: 767px) {
        width: 120px;
    }

    @media (max-width: 550px) {
        width: 260px;
    }

`

export const TitleCard = styled.span`
    margin: 0;
    font-size: 18px;
    color: #000000;
`

export const IconCard = styled.div`
    margin: 0;
    width: 35px;
    height: 35px;
`

export const Valor = styled.h2`
    margin: 0;
    text-align: center;
    color: #000000;
    font-size: 34px;

    @media (max-width: 1024px) {
        font-size: 26px;
    }

    @media (max-width: 767px) {
        font-size: 22px;
    }

    @media (max-width: 550px) {
        font-size: 34px;
    }

`