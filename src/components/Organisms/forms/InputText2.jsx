import styled from "styled-components";

export function InputText2({ children }) {
    return (
        <Container>
            <div className="form__group field">{children}</div>
        </Container>
    );
}
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 22px;
  width: 100%;

  .form__group {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .form__label {
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    text-align: left;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: ${(props) => props.theme.text};
    transition: background-color 5000s ease-in-out 0s;
  }
  
  .form__field {
    border: 1.5px solid ${({ theme }) => theme.color2};
    border-radius: 12px;
    font-family: inherit;
    outline: 0;
    font-size: 15px;
    color: ${(props) => props.theme.text};
    padding: 14px 16px;
    background: ${({ theme }) => theme.bg};
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
    
    &.disabled {
      color: #696969;
      background: #f5f5f5;
      border-radius: 12px;
    }
  }

  .form__field:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.12);
  }
  
  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
`;