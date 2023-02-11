import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Topbar from "./layouts/Topbar";
import ProductPage from "./pages/ProductPage";
import ProductTable from "./pages/ProductTable";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/homepage" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductPage />}></Route>
            <Route path="/productlist" element={<ProductTable />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
