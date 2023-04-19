import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 5rem;
  font-size: 3rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  p {
    color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px white;
  cursor: pointer;
  width: 6rem;
  height: 5rem;
  font-size: 4rem;
  color: white;

  :hover {
    color: red;
  }
  p {
    width: 100%;
    height: 100%;
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
    :hover {
      color: red;
    }
  }
`;

export const NumbersContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 50%;
  width: 70%;
  max-width: 70%;
  font-size: 3rem;
  border-bottom: solid white;
  overflow-x: hidden;

  /* ajustamos el height del contenedor para evitar el scroll en la página general */
  max-height: 20rem;

  p {
    word-wrap: break-word;
    /* eliminamos el max-height y agregamos un height para que el contenedor crezca dinámicamente */
    height: auto;
    max-height: 100%;
    width: 40%;
    margin: 0%;
    padding: 0%;
    font-size: 1.5rem;
    /* font-size-adjust: 0.5; */
    overflow-y: scroll;
    text-align: start;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px white;
    cursor: pointer;
    width: 2.3rem;
    height: 2rem;
    font-size: 1.6rem;
    color: white;
    margin: 10px;
    :hover {
      color: red;
    }
    background-color: #282c34;
  }
`;

export const StyledSumador = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
export const ButtonsInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  height: 50%;
`;
export const MathematicalCalculationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  overflow: hidden;
`;
export const StyledInput = styled.input`
  height: 3rem;
  color: white;
  padding-left: 2rem;
  font-size: 2rem;
  background-color: #282c34;
  width: 11rem;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
