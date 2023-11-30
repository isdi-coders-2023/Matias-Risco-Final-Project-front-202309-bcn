import { Navigate, Route, Routes } from "react-router-dom";

const App = (): React.ReactElement => (
  <div>
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </main>
  </div>
);

export default App;
