import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>
    //   <NavBar />
    //   <ItemListContainer/>
    // </>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        
        {/* <Route path="/category/:categoryid" element={<HomePage />} /> */}

        <Route path="/item/:itemid" element={<ItemDetailContainer />} />

        {/* <Route path="/contacto" element={<h1>Conctacto</h1>} /> */}

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
