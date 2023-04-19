import "./App.css";
import Sumador from "./pages/Home.js";
import { StyledSumador } from "./pages/homeStyled";

function App() {
  return (
    <StyledSumador>
      <Sumador />;
    </StyledSumador>
  );
}

export default App;
