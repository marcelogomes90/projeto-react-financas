import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    top: -50px;
    margin: 0 5% 0 5%;
    gap: 20px;

    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`

export default Container;