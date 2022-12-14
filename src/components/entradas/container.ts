import styled from "styled-components";

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5% 0 5%;
    width: 90vw;

    @media (max-width: 620px) {
        width: 100vw;
        padding: 0;
    }
`

export default Container;