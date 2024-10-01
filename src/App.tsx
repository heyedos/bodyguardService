//Styling
import "./App.css";
//Packages
import { HashRouter, Routes, Route } from "react-router-dom";
//Components
import { PageContainer } from "./components/PageContainer/PageContainer";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="" element={<PageContainer />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
