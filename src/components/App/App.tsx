import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import HomePage from "../../pages/HomePage/HomePage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import AddGamePage from "../../pages/AddGamePage/AddGamePage";
import { ToastContainer } from "react-toastify";
import InfoGamePage from "../../pages/InfoGamePage/InfoGamePage";

const App = (): React.ReactElement => {
  const { isLoading } = useAppSelector(({ uiState }) => uiState);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/game/add" element={<AddGamePage />} />
        <Route path="/game/add/:idGame" element={<InfoGamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <NavigationBar />
      {isLoading && <Loading />}
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
