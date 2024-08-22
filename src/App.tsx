import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/productContext";
import ProductContainer from "./containers/ProductContainer";
import PivotProductContainer from "./containers/PivotProductContainer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductContainer />} />
          <Route path="/pivot-table" element={<PivotProductContainer />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
