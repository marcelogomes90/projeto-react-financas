import styled from "styled-components";

export const DivCard = styled.div`
    width: 320px;
    height: 200px;
    border-radius: 10px;
    color: #000000;
    background-color: #FFFFFF;

    @media (min-width: 1367px) {
        width: 400px;
    }

    @media (max-width: 1024px) {
        width: 250px;
    }

    @media (max-width: 850px) {
        width: 180px;
        height: 180px;
    }

    @media (max-width: 620px) {
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

    @media (min-width: 1367px) {
        width: 390px;
    }

    @media (max-width: 1024px) {
        width: 210px;
    }

    @media (max-width: 850px) {
        width: 140px;
    }

    @media (max-width: 620px) {
        width: 280px;
    }
`

export const TitleCard = styled.span`
    margin: 0;
    font-size: 20px;
    color: #000000;

    @media (max-width: 1024px) {
        font-size: 18px;
    }

    @media (max-width: 1024px) {
        font-size: 16px;
    }

    @media (max-width: 620px) {
        font-size: 20px;
    }
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
        font-size: 30px;
    }

    @media (max-width: 850px) {
        font-size: 22px;
    }

    @media (max-width: 620px) {
        font-size: 28px;
    }
`