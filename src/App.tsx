//Styling
import './App.css';
//Packages
import {BrowserRouter , Routes, Route} from "react-router-dom"
//Components
import { PageContainer } from './components/PageContainer/PageContainer';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<PageContainer />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
