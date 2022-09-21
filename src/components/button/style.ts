import styled from 'styled-components'

const SubmitButton = styled.button`
    background-color: #3be099;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    width: 110px;
    height: 50px;
    cursor: pointer;

    &:active {
        background-color: #4CF0A9;
        width: 105px;
        height: 45px;
    }
`

export default SubmitButton;