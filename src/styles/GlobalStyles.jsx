import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.text};
    }
`;
