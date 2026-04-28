import styled from "styled-components";

export const Linea = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.text};
    margin: 10px 0;
    font-size: 14px;
    opacity: 0.6;

    &::before,
    &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid ${({ theme }) => theme.color2};
    }

    &::before {
        margin-right: .5em;
    }

    &::after {
        margin-left: .5em;
    }
`;