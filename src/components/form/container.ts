import styled from "styled-components";

const Container = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    gap: 10px;
    padding: 0 5% 0 5%;

    @media (max-width: 620px) {
        flex-direction: column;
    }
`

export default Container;