import styled from "styled-components";

export const FormTime = styled.p`
    margin: -20px -9px 0;
    text-align: right;
    color: ${({ theme }) => theme.color.doveGray};
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-style: normal;
    font-size: 0.7em;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0;
    }
`;