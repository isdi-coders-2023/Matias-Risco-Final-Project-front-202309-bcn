import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import HomePage from "../../pages/HomePage/HomePage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";

const App = (): React.ReactElement => {
  const { isLoading } = useAppSelector(({ uiState }) => uiState);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <NavigationBar />
      {isLoading && <Loading />}
    </>
  );
};

export default App;
