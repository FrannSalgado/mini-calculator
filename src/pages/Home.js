import React from "react";
import {
  CgMathPlus,
  CgMathDivide,
  CgMathMinus,
  CgMathEqual,
} from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEnter } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";

import {
  ButtonContainer,
  Home,
  Button,
  NumbersContainer,
  ButtonsInputContainer,
  MathematicalCalculationContainer,
  StyledInput,
} from "./homeStyled.js";
import { useState, useRef } from "react";

const Sumador = () => {
  const inputRef = useRef(null);
  const [MathCalculation, setMathCalculation] = useState("");
  const [InputValue, setInputValue] = useState("0");
  const [Result, setResult] = useState("");

  const handlerInputChange = (e) => {
    setMathCalculation(e.target.value.replace(/[^0-9+\-*\/()]/g, ""));
    setInputValue(e.target.value);
  };
  const handlerClear = (e) => {
    setInputValue("0");
    inputRef.current.value = "0";
    setResult("");
    setMathCalculation("");
  };

  const handlerSubmit = (e) => {
    setResult(eval(MathCalculation));
  };
  const handlerClick = (e) => {
    return InputValue === "0" ? inputRef.current.select() : null;
  };
  return (
    <Home>
      <MathematicalCalculationContainer>
        <NumbersContainer>
          <p>{MathCalculation}</p>
          <button type="submit">
            <CgMathEqual />
          </button>
          <p>{Result}</p>
        </NumbersContainer>
      </MathematicalCalculationContainer>
      <ButtonsInputContainer>
        <ButtonContainer>
          <Button onClick={handlerClear}>
            <TiDelete />
          </Button>
          <Button onClick={handlerSubmit}>
            <AiOutlineEnter />
          </Button>

          <Button onClick={() => (inputRef.current.value += "(")}>
            <p>(</p>
          </Button>
          <Button onClick={() => (inputRef.current.value += ")")}>
            <p>)</p>
          </Button>
        </ButtonContainer>
        <StyledInput
          type="text"
          defaultValue={0}
          onChange={handlerInputChange}
          ref={inputRef}
          onClick={handlerClick}
        ></StyledInput>

        <ButtonContainer>
          <Button onClick={() => (inputRef.current.value += "/")}>
            <CgMathDivide />
          </Button>
          <Button onClick={() => (inputRef.current.value += "-")}>
            <CgMathMinus />
          </Button>
          <Button onClick={() => (inputRef.current.value += "+")}>
            <CgMathPlus />
          </Button>

          <Button onClick={() => (inputRef.current.value += "*")}>
            <IoMdClose />
          </Button>
        </ButtonContainer>
      </ButtonsInputContainer>
    </Home>
  );
};
export default Sumador;
