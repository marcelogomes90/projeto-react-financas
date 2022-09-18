import styled from "styled-components";

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Input = styled.input`
    width: 250px;
    height: 35px;
    border-radius: 5px;
    border: solid;
    border-width: 1px;
    border-color: grey;
    padding: 5px 10px;
    font-size: medium;
    
    &:focus{
        outline-color: #570bad70;
    }
`

export const Label = styled.label`
    color: #000000;
`