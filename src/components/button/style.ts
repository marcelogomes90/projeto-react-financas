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

    @media (min-width: 1367px) {
        font-size: 18px;
        width: 120px;
        &:active {
            width: 110px;
        }
    }

    @media (max-width: 1024px) {
        font-size: 14px;
        width: 95px;
        &:active {
            width: 90px;
        }
    }

    @media (max-width: 850px) {
        font-size: 12px;
        width: 70px;
        &:active {
            width: 65px;
        }
    }

    @media (max-width: 620px) {
        font-size: 18px;
        width: 120px;
        &:active {
            width: 110px;
        }
    }
`

export default SubmitButton;