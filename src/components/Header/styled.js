import styled from "styled-components"

export const Comp = styled.a`
    color: ${props => props.aColor};
    text-decoration: none;

    div{
        background-color: ${props=> props.bColor};
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        width: 100%;
        height: 70px;
    }
`



