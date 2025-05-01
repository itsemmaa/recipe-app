import { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import SavedPage from "./pages/SavedPage";
import AddPage from "./pages/AddPage";
import { RecipeProvider } from "./context/RecipeContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFoundPage";


const App = () => {
  // const [currentPage, setCurrentPage] = useState("search");

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case "search":
  //       return <Search />;
  //     case "savedPage":
  //       return <SavedPage />;
  //     case "addPage":
  //       return <AddPage />;
  //     default:
  //       return <Search />;
  //   }
  // };

  return (
    <RecipeProvider>
      <HashRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </HashRouter>
    </RecipeProvider>
    // <RecipeProvider>
    //   <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    //   {renderPage()} 
    // </RecipeProvider>
  );
};

export default App;
