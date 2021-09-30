import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        text-align: center;
    }
    input[type=text]{
        margin: 10px 0;
        padding: 5px 10px;
        border-radius: 3px;
        border: none;
        border-bottom: 1px solid black;
        width: 90%;
    }
    input[type=text]:focus{
        outline: none;
    }
`;

export default Card;