import styled from 'styled-components'

const SubmitButton = styled.button`
    background-color: #3be099;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    width: 120px;
    height: 50px;
    cursor: pointer;

    &:active {
        background-color: #4CF0A9;
        width: 115px;
        height: 47px;
    }
`

export default SubmitButton;