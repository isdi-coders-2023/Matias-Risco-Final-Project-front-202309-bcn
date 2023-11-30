import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import HomePage from "../../pages/HomePage/HomePage";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => (
  <AppStyled>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
    <NavigationBar />
  </AppStyled>
);

export default App;
