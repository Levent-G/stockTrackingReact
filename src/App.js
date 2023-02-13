import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Topbar from "./layouts/Topbar";
import ProductPage from "./pages/ProductPage";
import ProductTable from "./pages/ProductTable";
import CategoryPage from "./pages/CategoryPage";
import SearchCatPage from "./pages/SearchCatPage";
import PastSalesChart from "./pages/PastSalesChart";
import OneProductGetComp from "./components/OneProductGetComp";

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
            <Route path="/categorylist" element={<CategoryPage />}></Route>
            <Route path="/searchcat" element={<SearchCatPage />}></Route>
            <Route path="/pastsaleschart" element={<PastSalesChart />}></Route>
            <Route
              path="/getoneproduct/:productId"
              element={<OneProductGetComp />}
            />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
