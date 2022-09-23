import styled from "styled-components";

export const DivInput = styled.div`
    width: 120px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media (min-width: 1367px) {
        width: 100px;
    }

    @media (max-width: 1024px) {
        width: 90px;
    }

    @media (max-width: 850px) {
        width: 70px;
    }

    @media (max-width: 620px) {
        width: 160px;
        height: 50px;
    }
`

export const Input = styled.input`
    width: 16px;
    height: 16px;

    @media (min-width: 1367px) {
        width: 18px;
        height: 18px;
    }

    @media (max-width: 1024px) {
        width: 14px;
        height: 14px;
    }

    @media (max-width: 850px) {
        width: 12px;
        height: 12px;
    }

    @media (max-width: 620px) {
        width: 18px;
        height: 18px;
    }
`

export const Label = styled.label`
    color: #000000;
    font-size: 16px;

    @media (min-width: 1367px) {
        font-size: 18px;
    }

    @media (max-width: 1024px) {
        font-size: 14px;
    }

    @media (max-width: 850px) {
        font-size: 12px;
    }

    @media (max-width: 620px) {
        font-size: 18px;
    }
`

