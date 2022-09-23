import styled from "styled-components";

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Input = styled.input`
    width: 150px;
    height: 30px;
    border-radius: 5px;
    border: solid;
    border-width: 1px;
    border-color: grey;
    padding: 5px 10px;
    font-size: medium;
    
    &:focus{
        outline-color: #570bad70;
    }

    @media (min-width: 1367px) {
        width: 180px;
    }

    @media (max-width: 1024px) {
        width: 120px;
    }

    @media (max-width: 850px) {
        width: 90px;
    }

    @media (max-width: 620px) {
        width: 250px;
    }
`

export const Label = styled.label`
    color: #000000;

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